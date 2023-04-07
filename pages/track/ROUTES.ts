import _ from 'lodash'
export const LINE_A = [
	{
		label: 'Grade School',
		title: 'Grade School',
		coordinate: {
			latitude: 14.634428736676266,
			longitude: 121.0764358420065
		},
		color: '#EAB95A'
	},
	{
		label: 'Gate 2.5',
		title: 'Gate 2.5',
		coordinate: {
			latitude: 14.637864756965353,
			longitude: 121.07495470477606
		},
		color: '#EAB95A'
	},
	{
		label: 'Leong Hall',
		title: 'Leong Hall',
		coordinate: {
			latitude: 14.640833122286619,
			longitude: 121.07629298277074
		},
		color: '#EAB95A'
	},
	{
		label: 'Xavier Hall',
		title: 'Xavier Hall',
		coordinate: {
			latitude: 14.639942460975785,
			longitude: 121.07872004372351
		},
		color: '#595C68'
	},
	{
		label: 'Old Comms',
		title: 'Old Comms',
		coordinate: {
			latitude: 14.636676879666329,
			longitude: 121.07818357693269
		},
		color: '#EAB95A'
	}
]
const LINE_B = [
	{
		label: 'High School',
		title: 'High School',
		coordinate: {
			latitude: 14.644426369599794,
			longitude: 121.0807136725779
		},
		color: '#8F7D40'
	},
	{
		label: 'SDC',
		title: 'Social Development Complex',
		coordinate: {
			latitude: 14.641797079663988,
			longitude: 121.07776984995961
		},
		color: '#8F7D40'
	},
	{
		label: 'NW Parking',
		title: 'Northwest Parking',
		coordinate: {
			latitude: 14.641371867430127,
			longitude: 121.07655753524874
		},
		color: '#8F7D40',
		hidden: true
	},
	{
		label: 'Xavier Hall',
		title: 'Xavier Hall',
		coordinate: {
			latitude: 14.639942460975785,
			longitude: 121.07872004372351
		},
		color: '#595C68'
	}
]
export const MARKERS = _.uniq(_.concat(LINE_A, LINE_B))

export const POLYLINE_A = [
	{ latitude: 14.637864756965353, longitude: 121.07495470477606 },
	{ latitude: 14.636676879666329, longitude: 121.07818357693269 },
	{ latitude: 14.635939799891771, longitude: 121.07637196390262 },
	{ latitude: 14.634428736676266, longitude: 121.0764358420065 },
	{ latitude: 14.634828460124702, longitude: 121.07612551939081 },
	{ latitude: 14.634873401327047, longitude: 121.07627001251339 },
	{ latitude: 14.636334310647612, longitude: 121.07625042036516 },
	{ latitude: 14.637272017219226, longitude: 121.07643066819381 },
	{ latitude: 14.637651142724838, longitude: 121.07634707499543 }
]
