import { useState } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Bus } from '../../../assets/svgs'
import { ALL_STATIONS } from '../ROUTES'
import _ from 'lodash'

export const InputSuggestions = () => {
	const [suggestions, handleSuggestions] = useState(ALL_STATIONS)

	return (
		<ScrollView className="">
			{suggestions.map((station, i) => {
				return (
					<View key={i}>
						<View className="ml-[15px]  flex flex-row h-[60px]">
							{/* change to justify-center if not xavier */}
							<View
								className={`w-10 flex flex-row items-center ${
									station.id === '1' ? 'justify-between' : 'justify-center'
								}`}
							>
								{station.line.map((line, i) => {
									return <Bus key={i} line={line} />
								})}
							</View>
							<View className="grow ml-4 flex flex-col justify-center">
								<Text className="text-base font-bold text-gray-black">{station.label}</Text>
								{/* <Text className="text-sm text-gray-black">Closest Station</Text> */}
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
