import React, { useState, useRef } from 'react'
import {
	Text,
	View,
	Platform,
	UIManager,
	LayoutAnimation,
	Button,
	Pressable,
	Animated,
	PanResponder
} from 'react-native'
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

export const Slider = () => {
	const [expand, handleExpand] = useState(false)
	const toggleExpand = (state) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
		handleExpand(state)
	}
	const pan = useRef(new Animated.ValueXY()).current

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: () => true,
			onPanResponderRelease: (e, gestureState) => {
				toggleExpand(gestureState.dy > 0)
			}
		})
	).current
	return (
		// <Pressable className="h-16 bg-blue-900" onPress={toggleExpand}>
		<Animated.View
			{...panResponder.panHandlers}
			className={`absolute ${expand ? 'h-32' : 'h-96'} translate-y-0 duration-300 bg-white z-10 bottom-0 w-full`}
		></Animated.View>
		// </Pressable>
	)
}
