import _ from 'lodash'
export const LINE_A = [
	{
		id: '1',
		label: 'Xavier Hall',
		title: 'Xavier Hall',
		coordinate: {
			latitude: 14.639942460975785,
			longitude: 121.07872004372351
		},
		color: '#595C68'
	},
	{
		id: 'a2',
		label: 'Old Comms',
		title: 'Old Comms',
		coordinate: {
			latitude: 14.636676879666329,
			longitude: 121.07818357693269
		},
		color: '#EAB95A'
	},
	{
		id: 'a3',
		label: 'Hagdan',
		title: 'Hagdan',
		coordinate: {
			latitude: 14.636027051065314,
			longitude: 121.08066658895413
		},
		color: '#EAB95A'
	},
	{
		id: 'a4',
		label: 'Grade School',
		title: 'Grade School',
		coordinate: {
			latitude: 14.634782213092796,
			longitude: 121.07616865459035
		},
		color: '#EAB95A'
	},
	{
		id: 'a5',
		label: 'Gate 2.5',
		title: 'Gate 2.5',
		coordinate: {
			latitude: 14.637864756965353,
			longitude: 121.07495470477606
		},
		color: '#EAB95A'
	},
	{
		id: 'a6',
		label: 'Leong Hall',
		title: 'Leong Hall',
		coordinate: {
			latitude: 14.640833122286619,
			longitude: 121.07629298277074
		},
		color: '#EAB95A'
	}
]
const LINE_B = [
	{
		id: '1',
		label: 'Xavier Hall',
		title: 'Xavier Hall',
		coordinate: {
			latitude: 14.639942460975785,
			longitude: 121.07872004372351
		},
		color: '#595C68'
	},
	{
		id: 'b2',
		label: 'High School',
		title: 'High School',
		coordinate: {
			latitude: 14.644426369599794,
			longitude: 121.0807136725779
		},
		color: '#8F7D40'
	},
	{
		id: 'b3',
		label: 'SDC',
		title: 'Social Development Complex',
		coordinate: {
			latitude: 14.641797079663988,
			longitude: 121.07776984995961
		},
		color: '#8F7D40'
	},
	{
		id: 'b4',
		label: 'NW Parking',
		title: 'Northwest Parking',
		coordinate: {
			latitude: 14.641371867430127,
			longitude: 121.07655753524874
		},
		color: '#8F7D40',
		hidden: true
	}
]
export const MARKERS = _.uniq(_.concat(LINE_A, LINE_B))

export const POLYLINE_A = [
	{ latitude: 14.637864756965353, longitude: 121.07495470477606 }, // 0 gate 2.5
	{ latitude: 14.640833122286619, longitude: 121.07629298277074 }, // 1 leong
	{ latitude: 14.639942460975785, longitude: 121.07872004372351 }, // 2 xavier
	{ latitude: 14.636676879666329, longitude: 121.07818357693269 }, // 3 old comms
	{ latitude: 14.636027051065314, longitude: 121.08066658895413 }, // 4 hagdan
	{ latitude: 14.634832289115554, longitude: 121.07512376349462 }, // gs other side
	{ latitude: 14.634873401327047, longitude: 121.07627001251339 }, // 6 GS - middle road to highway
	{ latitude: 14.636334310647612, longitude: 121.07625042036516 }, // 7 ocampo field small curve
	{ latitude: 14.637272017219226, longitude: 121.07643066819381 }, // 8 ocampo field bigger curve
	{ latitude: 14.637651142724838, longitude: 121.07634707499543 } // 9 jsec
]
export const POLYLINE_B = LINE_B.map((line) => line.coordinate)
export const TEST_ROUTE = {
	lines: ['b', 'a'],
	stations: [
		{
			station: 'High School',
			line: ['b'],
			time: '11:40 AM'
		},
		{
			station: 'Soc Dev Complex',
			line: ['b'],
			time: '11:40 AM'
		},
		{
			station: 'Xavier Hall',
			line: ['b', 'a'],
			time: '11:40 AM'
		},
		{
			station: 'FA Annex',
			line: ['a'],
			time: '11:40 AM'
		},
		{
			station: 'Hagdan/LST',
			line: ['a'],
			time: '11:40 AM'
		},
		{
			station: 'Grade School',
			line: ['a'],
			time: '11:40 AM'
		},
		{
			station: 'Gate 2.5',
			line: ['a'],
			time: '11:40 AM'
		},
		{
			station: 'Leong Hall',
			line: ['a'],
			time: '11:40 AM'
		}
	]
}
