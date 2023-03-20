import { Text, View, StyleSheet } from 'react-native'
import { useEffect, useRef } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { MAP_STYLES } from '../constants/MAP_STYLES'
export const TrackPage = ({ navigation }) => {
	const ref = useRef()
	const location = {
		latitude: 14.640037858362918,
		longitude: 121.07847243952978,
		latitudeDelta: 0.009,
		longitudeDelta: 0.009
	}
	const boundaries = {
		northEast: {
			latitude: 14.64602,
			longitude: 121.082481
		},
		southWest: {
			latitude: 14.632402,
			longitude: 121.074561
		}
	}
	useEffect(() => {
		if (ref.current) {
			ref.current.setMapBoundaries(
				{
					latitude: 14.64602,
					longitude: 121.082481
				},
				{
					latitude: 14.632402,
					longitude: 121.074561
				}
			)
		}
		// console.log(ref.current.getBoundaries())
	}, [])
	return (
		<View className="flex-1 items-center content-center">
			<View className="flex-1 justify-center w-full relative">
				<MapView
					ref={ref}
					style={styles.map}
					provider={PROVIDER_GOOGLE}
					mapType="standard"
					region={location}
					customMapStyle={MAP_STYLES}
					minZoomLevel={16.2}
				/>
				<View className="absolute h-32 bg-white z-10 bottom-0 w-full">
					<Text>Slider Component</Text>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		width: '100%',
		height: '100%'
	}
})
