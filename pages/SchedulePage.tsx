import { useState } from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import { LogoContainer } from '../components/LogoContainer'
import { TitleBanner } from '../components/TitleBanner'
import { LineASched, LineBSched } from '../assets/svgs'
import { ScheduleTabs } from '../components/ScheduleTabs'
const LineA = require('../assets/images/viewRouteA.png')
const LineB = require('../assets/images/viewRouteB.png')

export const SchedulePage = ({ navigation }) => {
	const [line, handleLine] = useState('A')
	return (
		<View className="relative h-screen">
			<LogoContainer></LogoContainer>
			<TitleBanner title={`ETA FOR LINE ${line} ${line === 'A' ? '(GRADE SCHOOL)' : '(HIGH SCHOOL)'}`} />

			<ScheduleTabs line={line} handleLine={handleLine} />

			<View className="bg-white pt-10 z-20 items-center">{line === 'A' ? <LineASched /> : <LineBSched />}</View>

			<View className="absolute  bottom-0 z-40  w-full">
				<Pressable className="flex px-4" onPress={() => navigation.navigate('RoutesModal')}>
					<Image source={line === 'A' ? LineA : LineB} className="w-full" resizeMode="contain" />
				</Pressable>
			</View>
		</View>
	)
}
