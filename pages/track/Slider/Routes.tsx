import { useState } from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { GRAY_DARK } from '../../../constants/colors'
import { Destination, Dropdown, Origin, Seat, A, B, ArrowRight } from './../../../assets/svgs'
export const Routes = ({ route, seatBanner }) => {
	const [expand, handleExpand] = useState(false)
	// bg-line-a
	// bg-line-b
	return (
		<>
			<View className="w-full flex px-4">
				<ScrollView>
					<View className={`grow h-10 bg-line-${seatBanner.line} p-2 flex-row items-center`}>
						<Seat />
						<Text className="ml-[35px] text-sm font-semibold grow text-white">Current Available Seats</Text>
						<Text className="mr-[30px] text-sm font-semibold text-white">{seatBanner.seats} Seats</Text>
					</View>
					{/* Origin */}
					<View className=" flex-row items-start">
						{/* left section */}
						<View className="w-[22px] ml-2  h-[100px] pt-[40px]">
							<Origin fill={GRAY_DARK} />
						</View>
						{/* body */}
						<View className="ml-2 flex grow">
							<View className="flex-row h-[100px] items-center">
								<View className="grow flex pt-2">
									<Text className="text-sm leading-4 text-gray-black">E-jeep departs from</Text>
									<Text className="text-base font-bold leading-5 text-gray-black">{route.stations[0].label}</Text>
									<View className="mt-2 flex-row">
										{route.lines.map((line, i) => (
											<View key={i} className="flex-row">
												<View className={`w-[46px] bg-line-${line} rounded flex justify-center`}>
													<Text className="flex text-center text-xs leading-[14px] text-white font-semibold">
														Line {line.toUpperCase()}
													</Text>
												</View>
												<View
													className={`${route.lines.length === 2 && i == 0 ? '' : 'hidden'} mx-[5px] justify-center`}
												>
													<ArrowRight />
												</View>
											</View>
										))}
									</View>
								</View>
								{/* right section */}
								<Text className="mr-[30px] text-sm text-gray-black">{route.stations[0].time}</Text>
							</View>
							<View className="bg-gray-light h-[3px] rounded-[50px]"></View>
						</View>
					</View>

					{/* Mid */}
					<View className="flex-row items-center">
						{/* left section */}
						<View className="w-[22px] ml-2"></View>
						{/* body */}

						{route.stations.length > 2 && (
							<View className="ml-2 my-[22px] mr-[30px] flex grow">
								<Pressable onPress={() => handleExpand(!expand)} className=" grow flex-row justify-between">
									<View className="flex-row items-center ">
										<Dropdown />
										<Text className="text-sm leading-4 ml-2 text-gray-black">View All Stops</Text>
									</View>
									<Text className="text-sm leading-4 text-gray-black">{route.stations.length - 1} stops</Text>
								</Pressable>
								{expand && (
									<View className="mt-2.5">
										{route.stations.map(({ label, time, line }, i) => {
											if (i != 0 && i != route.stations.length - 1) {
												return (
													<View key={i} className="flex-row items-center">
														<View className="w-[30px] flex-row mr-2.5  items-center justify-center">
															{line.length + route.lines.length > 3 ? (
																route.lines.map((jeep, i) => (
																	<View key={`jeep-${i}`} className="flex-row items-center justify-center">
																		{jeep === 'a' ? <A /> : <B />}
																		<View className={`${line.length === 2 && i == 0 ? '' : 'hidden'}`}>
																			<ArrowRight />
																		</View>
																	</View>
																))
															) : line[0] === 'a' ? (
																<A />
															) : (
																<B />
															)}
														</View>
														<Text className="text-gray-dark leading-5 text-xs grow">{label}</Text>
														<Text className="text-gray-dark leading-5 text-xs">{time}</Text>
													</View>
												)
											}
										})}
									</View>
								)}
							</View>
						)}
					</View>

					{/* Destination */}
					<View className=" flex-row items-end">
						{/* left section */}
						<View className="w-[22px] h-[60px] ml-2 flex justify-center items-center pt-[5px]">
							<Destination fill={GRAY_DARK} />
						</View>
						{/* body */}
						<View className="ml-2 flex grow">
							<View className="bg-gray-light h-[3px] rounded-[50px]"></View>
							<View className="flex-row h-[60px] items-center">
								<View className="grow flex pt-2">
									<Text className="text-sm leading-4 text-gray-black">E-jeep arrives at</Text>
									<Text className="text-base font-bold leading-5 text-gray-black">
										{route.stations[route.stations.length - 1].label}
									</Text>
								</View>
								{/* right section */}
								<Text className="mr-[30px] text-sm text-gray-black">
									{route.stations[route.stations.length - 1].time}
								</Text>
							</View>
						</View>
					</View>

					{/* padding for scroll */}
					<View className="h-40 w-full bg-white"></View>
				</ScrollView>
				<View></View>
			</View>
		</>
	)
}
