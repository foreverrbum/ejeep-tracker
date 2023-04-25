import { useEffect, useState } from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import { LogoContainer } from '../components/LogoContainer'
import { TitleBanner } from '../components/TitleBanner'
import { LINE_A, LINE_B } from './track/ROUTES'
import { BusWhite } from '../assets/svgs'
import { ScheduleTabs } from '../components/ScheduleTabs'
import _ from 'lodash'
import moment from 'moment'
const LineA = require('../assets/images/viewRouteA.png')
const LineB = require('../assets/images/viewRouteB.png')

export const SchedulePage = ({ navigation, jeeps }) => {
	const [line, handleLine] = useState('a')
	const [displayJeeps, handleDisplayJeeps] = useState(_.filter(jeeps, (jeep) => jeep.line === line))
	const [stations, handleStations] = useState(LINE_A)
	useEffect(() => {
		if (line === 'a') handleStations(LINE_A)
		else handleStations(LINE_B)
		handleDisplayJeeps(_.filter(jeeps, (jeep) => jeep.line === line))
	}, [line])
	return (
		<View className="relative h-screen">
			<LogoContainer></LogoContainer>
			<TitleBanner title={`ETA FOR LINE ${line.toUpperCase()} ${line === 'a' ? '(GRADE SCHOOL)' : '(HIGH SCHOOL)'}`} />

			<ScheduleTabs line={line} handleLine={handleLine} />

			<View className="bg-white z-20">
				<View className={`grow bg-line-${line} py-2 px-6 flex-row items-center rounded mx-4 mt-7 mb-5`}>
					<Text className=" grow text-xl font-semibold grow text-white">STATION</Text>
					<View className=" mx-3 w-[78px] items-center ">
						<BusWhite line={line} />
					</View>
					<View className=" w-[78px] items-center  ">
						<BusWhite line={line} />
					</View>
				</View>
				{stations.map((station) => {
					return (
						<View key={station.id} className="flex-row px-10 pb-4">
							<Text className="text-gray-black text-base grow ">{station.label}</Text>
							{displayJeeps.map((jeep, i) => {
								return (
									<Text key={i} className={`text-gray-black text-base w-[78px] text-center ${i == 0 && 'mx-3'}`}>
										{moment.unix(jeep.eta[station.id][0]).format('LT')}
									</Text>
								)
							})}
						</View>
					)
				})}
			</View>

			<View className="absolute  bottom-0 z-40  w-full">
				<Pressable className="flex px-4" onPress={() => navigation.navigate('RoutesModal', { line: line })}>
					<Image source={line === 'a' ? LineA : LineB} className="w-full" resizeMode="contain" />
				</Pressable>
			</View>
		</View>
	)
}
