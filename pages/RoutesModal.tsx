import { Pressable, Text, View } from 'react-native'
import { LogoContainer } from '../components/LogoContainer'
import { TitleBanner } from '../components/TitleBanner'

const Aroute = require('../assets/images/Aroute.png')
const Broute = require('../assets/images/Broute.png')
const Route = require('../assets/images/Route.png')

import { Image } from 'react-native'

export const RoutesModal = ({ navigation, route }) => {
	const line = route?.params?.line ?? null
	return (
		<View className="">
			<LogoContainer></LogoContainer>
			<TitleBanner
				title={line === 'a' ? 'LINE A (GRADE SCHOOL) ' : line === 'b' ? 'LINE B (HIGH SCHOOL) ' : 'E-JEEP ROUTES'}
			/>
			<View className="my-10 items-center ">
				{line === 'a' ? (
					<Image source={Aroute} className="w-11/12 h-[290px]" resizeMode="contain" />
				) : line === 'b' ? (
					<Image source={Broute} className="w-11/12 h-[290px]" resizeMode="contain" />
				) : (
					<Image source={Route} className="w-11/12 h-[290px]" resizeMode="contain" />
				)}
			</View>
			<View className="flex items-center">
				<Pressable className="bg-blue-dark rounded-md px-4 py-2" onPress={() => navigation.goBack()}>
					<Text className="text-white font-bold">Back</Text>
				</Pressable>
			</View>
		</View>
	)
}
