import React, { useRef, useState } from 'react'
import { Platform, UIManager, LayoutAnimation, Animated, PanResponder } from 'react-native'
import { Form } from './Form'
import { Dropdown } from './Dropdown'
import { Routes } from './Routes'
import { isInsideRegion } from './helper'
import { TEST_ROUTE } from '../ROUTES'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

export const Slider = ({ ignoreRegion, expand, handleExpand }) => {
	const [route, handleRoute] = useState(null)
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
				expand ? 'h-[450px]' : 'h-[155px]'
			} translate-y-0 duration-300 bg-white z-10 bottom-0 w-full rounded-tr-[10px] z-10 rounded-tl-[10px] shadow border border-t border-black/20 flex items-center`}
		>
			{/* Input Form */}
			<Form />
			{!route ? <Dropdown /> : <Routes route={route} />}
		</Animated.View>
	)
}
