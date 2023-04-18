import { Text, TextInput, View, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Destination, Origin, Switch } from '../../../assets/svgs'
import { BLUE_DARK } from '../../../constants/colors'
import { useRef } from 'react'

export const Form = ({
	handleExpand = null,
	handleOriginFocus,
	originFocus = null,
	destinationFocus = null,
	handleDestinationFocus
}) => {
	const originRef = useRef()
	const destinationRef = useRef()

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View className="w-full items-center">
				<View className="mt-1.5 bg-gray-medium w-[60px] h-[3px] rounded-[50px]"></View>
				<View className="pt-[18px] flex-row mx-6">
					<View className="grow flex gap-y-2.5">
						<View className="flex flex-row gap-x-2.5 mr-2.5">
							<View className="w-[18px] flex items-center justify-center">
								<Origin fill={BLUE_DARK} />
							</View>
							<TextInput
								ref={originRef}
								onLayout={() => {
									if (originFocus === true) originRef.current?.focus()
									if (handleOriginFocus) handleOriginFocus(false)
								}}
								className="grow h-[30px] bg-gray-light rounded-md px-3 pb-[3px] text-gray-dark text-sm"
								placeholder="Enter starting point"
								onFocus={() => {
									if (handleExpand) {
										handleExpand(true)
										if (handleOriginFocus) handleOriginFocus(true)
									}
								}}
							></TextInput>
						</View>
						<View className="flex flex-row gap-x-2.5 mr-2.5">
							<View className="w-[18px] flex items-center justify-center">
								<Destination fill={BLUE_DARK} />
							</View>
							<TextInput
								ref={destinationRef}
								onLayout={() => {
									if (destinationFocus === true) destinationRef.current?.focus()
									if (handleDestinationFocus) handleDestinationFocus(false)
								}}
								className="grow h-[30px] bg-gray-light rounded-md px-3 pb-[3px] text-gray-dark text-sm"
								placeholder="Enter starting point"
								onFocus={() => {
									if (handleExpand) handleExpand(true)
									if (handleDestinationFocus) handleDestinationFocus(true)
								}}
							></TextInput>
						</View>
					</View>

					<TouchableOpacity className="justify-center" onPress={() => Keyboard.dismiss()}>
						<Switch />
					</TouchableOpacity>
				</View>
				<Pressable
					onPress={() => {
						Keyboard.dismiss()
					}}
					className="h-[30px] mt-3 bg w-[120px] bg-blue-dark flex items-center justify-center rounded-md"
				>
					<Text className="font-bold text-sm rounded text-white ">Find E-Jeep</Text>
				</Pressable>
			</View>
		</TouchableWithoutFeedback>
	)
}
