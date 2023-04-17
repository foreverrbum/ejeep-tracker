import { View } from 'react-native'
import { InputSuggestions } from './InputSuggestions'
export const Dropdown = () => {
	return (
		<>
			{/* Divider */}
			<View className="w-full flex">
				<View className="mt-5 grow bg-gray-medium mx-4 h-[3px] rounded-[50px]"></View>
			</View>

			{/* Input Suggestions */}
			<View className="flex w-full">
				<InputSuggestions />
			</View>
		</>
	)
}
