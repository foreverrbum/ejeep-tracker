import React, { useRef } from 'react'
import { View, Platform, UIManager, LayoutAnimation, Animated, PanResponder } from 'react-native'
import { Form } from './Form'
import { InputSuggestions } from './InputSuggestions'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true)
}

export const FakeSlider = ({ handleIgnoreRegion, expand, handleExpand }) => {
	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (evt, gestureState) => true,
			onPanResponderRelease: (e, gestureState) => {
				toggleExpand(gestureState.dy > 0)
			}
		})
	).current
	const toggleExpand = (state) => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
		handleExpand(state)
	}
	let refScrollView: React.ElementRef<typeof View>

	return (
		<Animated.View
			{...panResponder.panHandlers}
			className={`absolute ${
				expand ? 'h-96' : 'h-[155px]'
			} translate-y-0 duration-300 bg-white z-10 bottom-0 w-full rounded-tr-[10px] z-10 rounded-tl-[10px] shadow border border-t border-black/20 flex items-center`}
		>
			{/* Input Form */}
			<Form />

			{/* divider */}
			<View className="w-full flex">
				<View className="mt-5 grow bg-gray-medium mx-4 h-[3px] rounded-[50px]"></View>
			</View>

			{/* Input Suggestions */}
			<View
				ref={(view) => (refScrollView = view)}
				className="flex w-full"
				onLayout={() => {
					refScrollView?.measure((fx, fy, width, height, px, py) => {
						handleIgnoreRegion({ x: px, y: py, width: width, height: height })
					})
				}}
			>
				<InputSuggestions />
			</View>
		</Animated.View>
	)
}
