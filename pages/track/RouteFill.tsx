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
				destination={{ latitude: 14.641156540974473, longitude: 121.07606493604241 }} // in front of arete
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				mode="WALKING"
				strokeColor={LINE_B_COLOR}
			/>
			{/* arete to exit road */}
			<Polyline
				coordinates={[
					{ latitude: 14.641156540974473, longitude: 121.07606493604241 }, // in front of arete
					{ latitude: 14.640907755343383, longitude: 121.07599480826018 } // exit road
				]}
				strokeColor={LINE_B_COLOR}
				strokeWidth={2}
			/>

			<MapViewDirections
				origin={{ latitude: 14.640907755343383, longitude: 121.07599480826018 }} // exit road
				destination={{ latitude: 14.640711742223138, longitude: 121.07563637737319 }} // fork
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor={LINE_B_COLOR}
			/>

			{/* uturn */}
			<Polyline
				coordinates={[
					{ latitude: 14.640711742223138, longitude: 121.07563637737319 }, // fork
					{ latitude: 14.64059363166869, longitude: 121.07568053190276 } // univ road
				]}
				strokeColor={LINE_B_COLOR}
				strokeWidth={2}
			/>

			{/* to Xavier */}
			<MapViewDirections
				origin={{ latitude: 14.64059363166869, longitude: 121.07568053190276 }} // univ road
				destination={POLYLINE_B[1]}
				waypoints={[POLYLINE_B[0]]}
				apikey={API_KEY} // insert your API Key here
				strokeWidth={2}
				strokeColor={LINE_B_COLOR}
			/>
		</>
	)
}
