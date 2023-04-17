import { Text, View, ScrollView } from 'react-native'
import { Bus } from '../../../assets/svgs'

export const InputSuggestions = () => {
	const arr = ['1', '2', '3', '4', '5', '6', '7']

	return (
		<ScrollView className="">
			{arr.map((item, i) => {
				return (
					<View key={i}>
						<View className="ml-[15px]  flex flex-row h-[60px]">
							{/* change to justify-center if not xavier */}
							<View className="w-10 flex flex-row items-center justify-between ">
								<Bus line="a" />
								<Bus line="b" />
							</View>
							<View className="grow ml-4 flex flex-col justify-center">
								<Text className="text-base font-bold text-gray-black">Your Location</Text>
								<Text className="text-sm text-gray-black">Closest Station</Text>
							</View>
						</View>

						{/* divider */}
						<View className="w-full flex">
							<View className="grow bg-gray-light mx-4 h-[2px] rounded-[50px]"></View>
						</View>
					</View>
				)
			})}
			{/* padding for scroll */}
			<View className="h-40 w-full bg-white"></View>
		</ScrollView>
	)
}
