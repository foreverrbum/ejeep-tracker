import React, { useEffect } from 'react'
import { initializeApp } from 'firebase/app'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { getDatabase, ref, child, get } from 'firebase/database'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TrackNavIcon, ScheduleNavIcon, AboutNavIcon, SupportNavIcon } from './assets/svgs'
import { TrackPage, SchedulePage, AboutPage, SupportPage, RoutesModal } from './pages'
import './styles'

export default function App() {
	// const firebaseConfig = {
	// 	apiKey: 'AIzaSyCpyjxMbd3rYz5fdoOqxxf1ZVMuqHx5sWk',
	// 	authDomain: 'ejeep-tracker-thesis-7b288.firebaseapp.com',
	// 	databaseURL: 'https://ejeep-tracker-thesis-7b288-default-rtdb.firebaseio.com',
	// 	projectId: 'ejeep-tracker-thesis-7b288',
	// 	storageBucket: 'ejeep-tracker-thesis-7b288.appspot.com',
	// 	messagingSenderId: '450588065691',
	// 	appId: '1:450588065691:ios:10115a25ef5892b6a82b3e'
	// }
	// const app = initializeApp(firebaseConfig)
	// const dbRef = ref(getDatabase())

	// useEffect(() => {
	// 	const getJeeps = async () => {
	// 		get(child(dbRef, `ejeeps`))
	// 			.then((snapshot) => {
	// 				if (snapshot.exists()) {
	// 					console.log('user:', i + 1)
	// 					console.log(snapshot.val())
	// 				} else {
	// 					console.log('No data available')
	// 				}
	// 			})
	// 			.catch((error) => {
	// 				console.error(error)
	// 			})
	// 	}
	// 		getJeeps().catch(console.error)

	// }, [])

	const Stack = createNativeStackNavigator()
	const MyTheme = {
		...DefaultTheme,
		colors: {
			...DefaultTheme.colors,
			background: '#fff'
		}
	}
	return (
		// <SafeAreaView className="flex-1">
		<NavigationContainer theme={MyTheme}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="main" component={TabNavigation} />

				<Stack.Group screenOptions={{ presentation: 'modal' }}>
					<Stack.Screen name="RoutesModal" component={RoutesModal} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
		// </SafeAreaView>
	)
}

const TabNavigation = () => {
	const insets = useSafeAreaInsets()
	const Tab = createBottomTabNavigator()
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#fff',
				tabBarInactiveTintColor: '#85A7F2',
				tabBarActiveBackgroundColor: '#446DC9',
				tabBarInactiveBackgroundColor: '#fff',
				tabBarLabelPosition: 'below-icon',
				tabBarStyle: { height: 50 + insets.bottom },
				tabBarLabelStyle: { paddingBottom: 4 }
			}}
		>
			<Tab.Screen
				name="Home"
				component={TrackPage}
				options={{
					tabBarLabel: 'TRACK',
					tabBarIcon: (props) => <TrackNavIcon {...props} />
				}}
			/>
			<Tab.Screen
				name="Schedule"
				component={SchedulePage}
				options={{
					tabBarLabel: 'ETAs',
					tabBarIcon: (props) => <ScheduleNavIcon {...props} />
				}}
			/>
			<Tab.Screen
				name="About"
				component={AboutPage}
				options={{
					tabBarLabel: 'ABOUT',
					tabBarIcon: (props) => <AboutNavIcon {...props} />
				}}
			/>
			<Tab.Screen
				name="Support"
				component={SupportPage}
				options={{
					tabBarLabel: 'SUPPORT',
					tabBarIcon: (props) => <SupportNavIcon {...props} />
				}}
			/>
		</Tab.Navigator>
	)
}
