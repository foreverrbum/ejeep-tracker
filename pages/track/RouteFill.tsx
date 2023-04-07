import { POLYLINE_A } from './ROUTES'
import { API_KEY } from './MAP'
import { View } from 'react-native'

import MapViewDirections from 'react-native-maps-directions'

export const RouteFill = () => {
	return (
		<>
			<MapViewDirections
				origin={POLYLINE_A[0]}
				destination={POLYLINE_A[4]}
				waypoints={[POLYLINE_A[1], POLYLINE_A[2], POLYLINE_A[3]]}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor="#EAB95A"
			/>
			<MapViewDirections
				origin={POLYLINE_A[4]}
				destination={POLYLINE_A[0]}
				mode="WALKING"
				waypoints={[POLYLINE_A[5], POLYLINE_A[6], POLYLINE_A[7], POLYLINE_A[8]]}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor="#EAB95A"
			/>
		</>
	)
}
