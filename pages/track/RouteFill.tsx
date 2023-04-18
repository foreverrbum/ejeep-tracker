import { POLYLINE_A, POLYLINE_B } from './ROUTES'
import { LINE_A as LINE_A_COLOR, LINE_B as LINE_B_COLOR } from '../../constants/colors'
import { API_KEY } from './MAP'
import { Polyline, Marker } from 'react-native-maps'
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
				strokeColor={LINE_A_COLOR}
			/>
			{/* <Marker key="213241" title="4" coordinate={POLYLINE_A[5]}></Marker> */}
			<MapViewDirections
				origin={POLYLINE_A[5]}
				destination={POLYLINE_A[0]}
				mode="WALKING"
				waypoints={(POLYLINE_A[7], POLYLINE_A[8], [POLYLINE_A[9]])}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor={LINE_A_COLOR}
			/>
			<MapViewDirections
				origin={POLYLINE_B[1]}
				destination={POLYLINE_B[POLYLINE_B.length - 1]}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor={LINE_B_COLOR}
			/>

			<MapViewDirections
				origin={POLYLINE_B[1]}
				destination={POLYLINE_B[1]}
				waypoints={[POLYLINE_B[0]]}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor={LINE_B_COLOR}
			/>
			<Polyline
				coordinates={[
					{ latitude: 14.641350899262309, longitude: 121.07656149001258 }, // road in front of NW PArking
					{ latitude: 14.641162571320805, longitude: 121.07634861944705 } // uturn back to univ road
				]}
				strokeColor={LINE_B_COLOR}
				strokeWidth={2}
			/>

			<MapViewDirections
				origin={{ latitude: 14.641404856160548, longitude: 121.07723036176739 }} // intersection before turning left to univ road
				destination={{ latitude: 14.641162571320805, longitude: 121.07634861944705 }} // uturn back to univ road
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor={LINE_B_COLOR}
				mode="WALKING"
			/>
		</>
	)
}
