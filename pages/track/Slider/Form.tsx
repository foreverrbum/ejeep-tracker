import { Text, TextInput, View, Pressable, TouchableOpacity } from 'react-native'
import { Destination, Origin, Switch } from '../../../assets/svgs'
import { BLUE_DARK } from '../../../constants/colors'

export const Form = () => {
	return (
		<>
			<View className="mt-1.5 bg-gray-medium w-[60px] h-[3px] rounded-[50px]"></View>
			<View className="pt-[18px] flex-row mx-6 ">
				<View className="grow flex gap-y-2.5">
					<View className="flex flex-row gap-x-2.5 mr-2.5">
						<View className="w-[18px] flex items-center justify-center">
							<Origin fill={BLUE_DARK} />
						</View>
						<TextInput
							className="grow h-[30px] bg-gray-light rounded-md px-3 pb-[3px] text-gray-dark text-sm"
							placeholder="Enter starting point"
						></TextInput>
					</View>
					<View className="flex flex-row gap-x-2.5 mr-2.5">
						<View className="w-[18px] flex items-center justify-center">
							<Destination fill={BLUE_DARK} />
						</View>
						<TextInput
							className="grow h-[30px] bg-gray-light rounded-md px-3 pb-[3px] text-gray-dark text-sm"
							placeholder="Enter starting point"
						></TextInput>
					</View>
				</View>

				<TouchableOpacity className="justify-center">
					<Switch />
				</TouchableOpacity>
			</View>
			<Pressable
				onPress={() => console.log('press')}
				className="h-[30px] mt-3 bg w-[120px] bg-blue-dark flex items-center justify-center rounded-md"
			>
				<Text className="font-bold text-sm rounded text-white ">Find E-Jeep</Text>
			</Pressable>
		</>
	)
}
