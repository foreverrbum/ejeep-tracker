import { Text, View, Pressable, TouchableOpacity } from 'react-native'
import { Destination, Origin, Switch } from '../../../assets/svgs'
import { BLUE_DARK } from '../../../constants/colors'

export const Form = ({
	handleExpand = null,
	handleOriginFocus,
	originFocus = null,
	destinationFocus = null,
	handleDestinationFocus,
	origin = null,
	handleOrigin = null,
	handleDestination = null,
	destination = null
}) => {
	return (
		<View className="pb-5 w-full items-center">
			<View className="mt-1.5 bg-gray-medium w-[60px] h-[3px] rounded-[50px]"></View>
			<View className="pt-[18px] flex-row mx-6">
				<View className="grow flex gap-y-2.5">
					<View className="flex flex-row gap-x-2.5 mr-2.5">
						<View className="w-[18px] flex items-center justify-center">
							<Origin fill={BLUE_DARK} />
						</View>
						<Pressable
							className={`grow h-[30px]  bg-gray-light rounded-md px-3  border-2 flex justify-center  ${
								originFocus === true ? 'border-blue-200' : 'border-transparent'
							}`}
							onPress={() => {
								if (handleExpand) handleExpand(true)
								if (handleOriginFocus) handleOriginFocus(true)
								if (handleDestinationFocus) handleDestinationFocus(false)
							}}
						>
							<Text
								className={`text-sm leading-4 text-gray-dark ${originFocus === true ? 'font-medium' : 'opacity-50'}`}
							>
								{origin ?? 'Select Starting Point'}
							</Text>
						</Pressable>
					</View>
					<View className="flex flex-row gap-x-2.5 mr-2.5">
						<View className="w-[18px] flex items-center justify-center">
							<Destination fill={BLUE_DARK} />
						</View>
						<Pressable
							className={`grow h-[30px]  bg-gray-light rounded-md px-3  border-2 flex justify-center  ${
								destinationFocus === true ? 'border-blue-200' : 'border-transparent'
							}`}
							onPress={() => {
								if (handleExpand) handleExpand(true)
								if (handleDestinationFocus) handleDestinationFocus(true)
								if (handleOriginFocus) handleOriginFocus(false)
							}}
						>
							<Text
								className={`text-sm leading-4 text-gray-dark ${
									destinationFocus === true ? 'font-medium' : 'opacity-50'
								}`}
							>
								{destination ?? 'Select Destination'}
							</Text>
						</Pressable>
					</View>
				</View>

				<TouchableOpacity
					className="justify-center"
					onPress={() => {
						handleOrigin(destination)
						handleDestination(origin)
					}}
				>
					<Switch />
				</TouchableOpacity>
			</View>
		</View>
	)
}
