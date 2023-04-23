import React, { useEffect, useRef, useState } from 'react'
import { Platform, UIManager, LayoutAnimation, Animated, PanResponder } from 'react-native'
import { Form } from './Form'
import { Dropdown } from './Dropdown'
import { Routes } from './Routes'
import { getRoute, isInsideRegion } from './helper'
import { TEST_ROUTE } from '../ROUTES'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

export const Slider = ({
	ignoreRegion,
	expand,
	handleExpand,
	originFocus,
	handleOriginFocus,
	destinationFocus,
	handleDestinationFocus,
	jeeps
}) => {
	const [route, handleRoute] = useState(null)
	const [seatBanner, handleSeatBanner] = useState(null)

	const [origin, handleOrigin] = useState(null)
	const [destination, handleDestination] = useState(null)
	const [selected, handleSelected] = useState(null)

	useEffect(() => {
		if (!selected) return
		if (originFocus) {
			if (selected === destination) return
			handleOrigin(selected)
			handleOriginFocus(false)
			if (!destination) handleDestinationFocus(true)
		}
		if (destinationFocus) {
			if (selected === destination) return
			handleDestination(selected)
			handleDestinationFocus(false)
			if (!origin) handleOriginFocus(true)
		}
	}, [selected])

	useEffect(() => {
		if (!origin || !destination) return
		const { route: newRoute, seatBanner: newBanner } = getRoute(origin, destination, jeeps)
		handleRoute(newRoute)
		handleSeatBanner(newBanner)
	}, [origin, destination])

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (evt, gestureState) => {
				if (isInsideRegion(gestureState.moveX, gestureState.moveY, ignoreRegion)) {
					return false
				} else {
					return true
				}
			},
			onPanResponderRelease: (e, gestureState) => {
				toggleExpand(gestureState.dy < 0)
			}
		})
	).current

	const toggleExpand = (state) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
		handleExpand(state)
	}

	return (
		<Animated.View
			{...panResponder.panHandlers}
			className={`absolute ${
				expand ? 'h-[450px]' : 'h-[120px]'
			} translate-y-0 duration-300 bg-white z-10 bottom-0 w-full rounded-tr-[10px] z-10 rounded-tl-[10px] shadow border border-t border-black/20 flex items-center`}
		>
			{/* Input Form */}
			<Form
				originFocus={originFocus}
				handleOriginFocus={handleOriginFocus}
				destinationFocus={destinationFocus}
				handleDestinationFocus={handleDestinationFocus}
				origin={origin}
				handleOrigin={handleOrigin}
				destination={destination}
				handleDestination={handleDestination}
			/>
			{originFocus === true || destinationFocus === true || !route ? (
				<Dropdown handleSelected={handleSelected} />
			) : (
				<Routes route={route} seatBanner={seatBanner} />
			)}
		</Animated.View>
	)
}
