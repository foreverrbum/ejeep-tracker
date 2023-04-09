import { POLYLINE_A, POLYLINE_B } from './ROUTES'
import { API_KEY } from './MAP'

import MapViewDirections from 'react-native-maps-directions'

export const RouteFill = () => {
	return (
		<>
			<MapViewDirections
				origin={POLYLINE_A[0]}
				destination={POLYLINE_A[5]}
				waypoints={[POLYLINE_A[1], POLYLINE_A[2], POLYLINE_A[3], POLYLINE_A[4]]}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor="#EAB95A"
			/>
			<MapViewDirections
				origin={POLYLINE_A[5]}
				destination={POLYLINE_A[0]}
				mode="WALKING"
				waypoints={(POLYLINE_A[6], POLYLINE_A[7], POLYLINE_A[8], [POLYLINE_A[9]])}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor="#EAB95A"
			/>
			<MapViewDirections
				origin={{ latitude: 14.6444700324687, longitude: 121.08041895372087 }}
				destination={{ latitude: 14.6444700324687, longitude: 121.08041895372087 }}
				waypoints={[{ latitude: 14.640826314486352, longitude: 121.07587336440143 }, POLYLINE_B[POLYLINE_B.length - 1]]}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor="#8F7D40"
				mode="WALKING"
			/>

			{/* { latitude: 14.640826314486352, longitude: 121.07587336440143 }, */}
		</>
	)
}
