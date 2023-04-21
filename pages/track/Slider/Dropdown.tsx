import { View } from 'react-native'
import { InputSuggestions } from './InputSuggestions'
export const Dropdown = ({ handleSelected }) => {
	return (
		<>
			{/* Divider */}
			<View className="w-full flex">
				<View className="grow bg-gray-medium opacity-50 mx-4 h-[3px] rounded-[50px]"></View>
			</View>

			{/* Input Suggestions */}
			<View className="flex w-full">
				<InputSuggestions handleSelected={handleSelected} />
			</View>
		</>
	)
}
