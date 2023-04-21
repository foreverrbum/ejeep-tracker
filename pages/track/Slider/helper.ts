import { LINE_A, LINE_B } from '../ROUTES'
import _ from 'lodash'
import moment from 'moment'
export const isInsideRegion = (x, y, ignoreRegion) => {
	return (
		x >= ignoreRegion.x &&
		x <= ignoreRegion.x + ignoreRegion.width &&
		y >= ignoreRegion.y &&
		y <= ignoreRegion.y + ignoreRegion.height
	)
}
export const getRoute = (origin, destination, jeeps) => {
	let route = {
		lines: [],
		stations: []
	}
	let jeep_stations = []

	// setting lines
	if (origin.id === '1' || destination.id === '1') {
		route.lines = origin.id === '1' ? destination.line : origin.line
	} else if (origin.line[0] === destination.line[0]) {
		route.lines = origin.line
	} else {
		route.lines = [origin.line[0], destination.line[0]]
	}

	// setting stations
	// CASE 1: the route involves two lines
	if (route.lines.length > 1) {
		// get stations along the route from origin to destination
		let origin_line = origin.line[0] === 'a' ? LINE_A : LINE_B
		let dest_line = destination.line[0] === 'a' ? LINE_A : LINE_B
		const index_origin = _.findIndex(origin_line, ['id', origin.id])
		const index_dest = _.findIndex(dest_line, ['id', destination.id])
		origin_line = _.slice(origin_line, index_origin, origin_line.length)
		dest_line = _.slice(dest_line, 0, index_dest + 1)

		//get jeep data from DB
		const jeeps_for_origin = _.filter(jeeps, (jeep) => jeep.line === origin.line[0])
		let jeep_for_origin = jeeps_for_origin[0]
		const jeeps_for_dest = _.filter(jeeps, (jeep) => jeep.line === destination.line[0])

		// select jeep data that arrives earliest to origin
		jeeps_for_origin.map((item) => {
			if (item.eta[origin.id] < jeep_for_origin.eta[destination.id]) jeep_for_origin = item
		})
		// setting eta for stations along the route of the first jeep line
		let i = 0
		origin_line.map((station) => {
			if (jeep_for_origin.eta[origin.id][0] > jeep_for_origin.eta[station.id][i]) i = 1
			station.time = jeep_for_origin.eta[station.id][i]
		})
		// select the earliest jeep for the second line that arrives in Xavier after the first jeep arrives in Xavier
		if (jeep_for_origin.eta['1'][0] < origin_line[origin_line.length - 1].time) i = 1
		const transfer_time_arrival = jeep_for_origin.eta['1'][i]
		let jeep_for_dest
		i = 0
		jeeps_for_dest.map((item) => {
			if (item.eta['1'][0] >= transfer_time_arrival) {
				if (!jeep_for_dest) jeep_for_dest = item
				else if (item.eta['1'][0] <= jeep_for_dest.eta['1'][0]) {
					jeep_for_dest = item
				}
			}
		})
		jeeps_for_dest.map((item) => {
			if (item.eta['1'][1] >= transfer_time_arrival) {
				if (!jeep_for_dest) {
					jeep_for_dest = item
					i = 1
				} else if (item.eta['1'][1] <= jeep_for_dest.eta['1'][i]) {
					jeep_for_dest = item
					i = 1
				}
			}
		})
		// setting eta for stations along the route of the second jeep line
		dest_line.map((station) => {
			if (jeep_for_dest.eta['1'][i] > jeep_for_dest.eta[station.id][i]) i++
			station.time = jeep_for_dest.eta[station.id][i]
		})
		// combining stations along each line into one route
		route.stations = _.concat(origin_line, dest_line)
		route.stations.map((station) => {
			station.time = station.time ? moment.unix(station.time).format('LT') : '-'
		})
	}
	// CASE 2: the route involves one line
	else {
		//  set lines and stations
		jeep_stations = route.lines[0] === 'a' ? LINE_A : LINE_B
		const index_origin = _.findIndex(jeep_stations, ['id', origin.id])
		const index_dest = _.findIndex(jeep_stations, ['id', destination.id])
		if (index_origin < index_dest) {
			route.stations = _.slice(jeep_stations, index_origin, index_dest + 1)
		} else {
			route.stations = _.concat(
				_.slice(jeep_stations, index_origin, jeep_stations.length),
				_.slice(jeep_stations, 0, index_dest + 1)
			)
		}

		// get jeep data from DB
		const jeeps_for_line = _.filter(jeeps, (jeep) => jeep.line === route.lines[0])
		let jeep = jeeps_for_line[0]
		let i = 0

		// select jeep that arrives earlier at origin
		jeeps_for_line.map((item) => {
			if (item.eta[origin.id][0] < jeep.eta[origin.id][0]) jeep = item
		})

		// insert eta into route data
		route.stations.map((station) => {
			if (jeep.eta[origin.id][0] > jeep.eta[station.id][i]) i = 1
			station.time = moment.unix(jeep.eta[station.id][i]).format('LT')
		})
	}

	return route
}
