import { Text, View } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { MAP_STYLES, CUSTOM_MAP_STYLES, INITIAL_LOCATION, BOUNDARIES } from './track/MAP'
import { BPin } from '../assets/svgs'
import { MARKERS } from './track/ROUTES'
import { RouteFill } from './track/RouteFill'
import { SliderHolder } from './track/Slider/SliderHolder'
import { Shuttle } from '../assets/svgs'

export const TrackPage = ({ navigation, jeeps }) => {
	const [load, handleLoad] = useState(true)
	const [displayJeeps, handleDisplayJeeps] = useState(jeeps)
	const [selectedJeepIdx, handleSelectedJeepIdx] = useState([])
	const [markers, setMarkers] = useState(MARKERS)
	const ref = useRef()
	useEffect(() => {
		if (selectedJeepIdx.length === 0) handleDisplayJeeps(jeeps)
		else handleDisplayJeeps(selectedJeepIdx.map((i) => jeeps[i]))
	}, [selectedJeepIdx, jeeps])

	useEffect(() => {
		if (ref.current) {
			ref.current.setMapBoundaries(BOUNDARIES.northEast, BOUNDARIES.southWest)
		}
	}, [])
	return (
		<View className="flex-1 items-center content-center">
			<View className="flex-1 justify-center w-full relative">
				<MapView
					ref={ref}
					onRegionChange={async (region) => {
						const coords = await ref?.current?.getCamera()
						const tempMarkers = markers
						if (coords.zoom > 16.9) {
							tempMarkers[tempMarkers.length - 1].hidden = false
						} else {
							tempMarkers[tempMarkers.length - 1].hidden = true
						}
						setMarkers(tempMarkers)
						handleLoad(!load)
					}}
					style={MAP_STYLES.map}
					provider={PROVIDER_GOOGLE}
					mapType="standard"
					initialRegion={INITIAL_LOCATION}
					customMapStyle={CUSTOM_MAP_STYLES}
					minZoomLevel={16.2}
				>
					{markers.map((marker, i) => {
						return (
							<Marker key={i} title={marker.title} coordinate={marker.coordinate}>
								<View className={`flex items-center ${marker.hidden === true && 'hidden'}`}>
									<Text className={`font-bold text-xs text-gray-dark`}>{marker.label}</Text>
									<BPin fill={marker.color} />
								</View>
							</Marker>
						)
					})}
					{displayJeeps.length > 0 &&
						displayJeeps.map(({ line, location }, i) => {
							return (
								<Marker key={i} coordinate={location} zIndex={2}>
									<Shuttle line={line} />
								</Marker>
							)
						})}

					<RouteFill />
				</MapView>
				<SliderHolder jeeps={jeeps} handleSelectedJeepIdx={handleSelectedJeepIdx} />
			</View>
		</View>
	)
}
