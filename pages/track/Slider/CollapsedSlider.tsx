import React, { useRef } from 'react'
import { Platform, UIManager, LayoutAnimation, Animated, PanResponder } from 'react-native'
import { Form } from './Form'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

export const CollapsedSlider = ({ expand, handleExpand, handleOriginFocus, handleDestinationFocus }) => {
	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
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
				handleExpand={handleExpand}
				handleOriginFocus={handleOriginFocus}
				handleDestinationFocus={handleDestinationFocus}
			/>
		</Animated.View>
	)
}
