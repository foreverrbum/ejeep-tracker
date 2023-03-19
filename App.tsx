import React, {useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View, StyleSheet } from "react-native";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TrackNavIcon, ScheduleNavIcon, AboutNavIcon, SupportNavIcon} from './assets/svgs/NavIcons';
import { TrackPage, SchedulePage, AboutPage, SupportPage, RoutesModal } from "./pages";
import "./styles";

export default function App() {
  // const firebaseConfig = {
  //   apiKey: 'AIzaSyCpyjxMbd3rYz5fdoOqxxf1ZVMuqHx5sWk',
  //   authDomain: 'ejeep-tracker-thesis-7b288.firebaseapp.com',
  //   databaseURL: 'https://ejeep-tracker-thesis-7b288-default-rtdb.firebaseio.com',
  //   projectId: 'ejeep-tracker-thesis-7b288',
  //   storageBucket: 'ejeep-tracker-thesis-7b288.appspot.com',
  //   messagingSenderId: '450588065691',
  //   appId: '1:450588065691:ios:10115a25ef5892b6a82b3e',
  // };
  // const app = initializeApp(firebaseConfig);
  // const dbRef = ref(getDatabase());
  // const location = {
  //   latitude: 14.640037858362918,
  //   longitude: 121.07847243952978,
  //   latitudeDelta: 0.009,
  //   longitudeDelta: 0.009

  // }
  // useEffect(()=>{
  //   const getCities = async () => {
      
  //     get(child(dbRef, `glossary`)).then((snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log(snapshot.val());
  //       } else {
  //         console.log("No data available");
  //       }
  //     }).catch((error) => {
  //       console.error(error);
  //     });
  //   }
  //   getCities()
  //     .catch(console.error)
  // },[])
  
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      {/* <View className="flex-1 justify-center bg-white">
        <MapView 
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            mapType='hybrid'
            region={location}
          />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}

      >
        <Stack.Screen name="main" component={TabNavigation} />

        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="RoutesModal"  component={RoutesModal} />
        </Stack.Group>
        {/* <Stack.Screen name="main" component={TabNavigation} /> */}

      </Stack.Navigator>
        
    </NavigationContainer>
    
  );
}

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator screenOptions={{
      headerShown:false,
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#85A7F2',
      tabBarActiveBackgroundColor: '#446DC9',
      tabBarInactiveBackgroundColor: '#fff',
      tabBarLabelPosition: 'below-icon'
    }}>
      
      <Tab.Screen 
        name="Home"
        component={TrackPage}
        options={{
          tabBarLabel: 'TRACK',
          tabBarIcon: (props) => (
            <TrackNavIcon {...props}/>
          ) 
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={SchedulePage}
        options={{
          tabBarLabel: 'SCHEDULE',
          tabBarIcon: (props) => (
            <ScheduleNavIcon {...props}/>
          ) 
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutPage}
        options={{
          tabBarLabel: 'ABOUT',
          tabBarIcon: (props) => (
            <AboutNavIcon {...props}/>
          ) 
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportPage}
        options={{
          tabBarLabel: 'SUPPORT',
          tabBarIcon: (props) => (
            <SupportNavIcon {...props}/>
          ) 
        }}
      />
      
    </Tab.Navigator>    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
