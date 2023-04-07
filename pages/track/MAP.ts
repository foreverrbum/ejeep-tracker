import { StyleSheet } from 'react-native'

export const CUSTOM_MAP_STYLES = [
	{
		elementType: 'labels',
		stylers: [
			{
				visibility: 'off'
			}
		]
	},
	{
		featureType: 'administrative.land_parcel',
		stylers: [
			{
				visibility: 'off'
			}
		]
	},
	{
		featureType: 'administrative.neighborhood',
		stylers: [
			{
				visibility: 'off'
			}
		]
	}
]
export const MAP_STYLES = StyleSheet.create({
	container: {
		flex: 1
	},
	map: {
		width: '100%',
		height: '100%'
	}
})

export const INITIAL_LOCATION = {
	latitude: 14.640037858362918,
	longitude: 121.07847243952978,
	latitudeDelta: 0.009,
	longitudeDelta: 0.009
}
export const BOUNDARIES = {
	northEast: {
		latitude: 14.64602,
		longitude: 121.082481
	},
	southWest: {
		latitude: 14.632402,
		longitude: 121.074561
	}
}
export const API_KEY = 'AIzaSyA2gfM5kzGeHTN4x0VOAxtMBzLMvx4OCBo'
const classes = 'text-[#EAB95A] text-[#8F7D40] text-[#595C68]'
