import { Text, View, ScrollView } from 'react-native'
import { Bus } from '../../../assets/svgs/Bus'

export const InputSuggestions = () => {
	const arr = ['1', '2', '3', '4', '5', '6', '7']

	return (
		<ScrollView className="">
			{/* icon 40px mr-15px items-center gap-x-1; text is 16px from icon */}
			{/* divider, 2px, w-full mx-4 light gray */}
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
			<View className="h-40 w-full bg-white"></View>
		</ScrollView>
	)
}
