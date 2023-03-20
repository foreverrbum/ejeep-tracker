import { Pressable, Text, View } from 'react-native'
import { LogoContainer } from '../components/LogoContainer'
import { TitleBanner } from '../components/TitleBanner'
import { EjeepRoutes } from '../assets/svgs/Routes'

export const RoutesModal = ({ navigation }) => {
	return (
		<View className="">
			<LogoContainer></LogoContainer>
			<TitleBanner title="E-JEEP ROUTES" />
			<View className="my-10 items-center">
				<EjeepRoutes />
			</View>
			<View className="flex items-center">
				<Pressable className="bg-blue-dark rounded-md px-4 py-2" onPress={() => navigation.goBack()}>
					<Text className="text-white font-bold">Back</Text>
				</Pressable>
			</View>
		</View>
	)
}
