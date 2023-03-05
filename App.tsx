import React, {useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Text, View, StyleSheet } from "react-native";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get } from "firebase/database";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {TrackNavIcon, ScheduleNavIcon, AboutNavIcon, SupportNavIcon} from './components/NavIcons';
import "./styles";

export default function App() {
  const firebaseConfig = {
    apiKey: 'AIzaSyCpyjxMbd3rYz5fdoOqxxf1ZVMuqHx5sWk',
    authDomain: 'ejeep-tracker-thesis-7b288.firebaseapp.com',
    databaseURL: 'https://ejeep-tracker-thesis-7b288-default-rtdb.firebaseio.com',
    projectId: 'ejeep-tracker-thesis-7b288',
    storageBucket: 'ejeep-tracker-thesis-7b288.appspot.com',
    messagingSenderId: '450588065691',
    appId: '1:450588065691:ios:10115a25ef5892b6a82b3e',
  };
  const app = initializeApp(firebaseConfig);
  const dbRef = ref(getDatabase());
  const location = {
    latitude: 14.640037858362918,
    longitude: 121.07847243952978,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009

  }
  useEffect(()=>{
    const getCities = async () => {
      
      get(child(dbRef, `glossary`)).then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
    getCities()
      .catch(console.error)
  },[])
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
 const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <View className="flex-1 justify-center bg-white">
        <MapView 
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            mapType='hybrid'
            region={location}
          />
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
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
          component={HomeScreen}
          options={{
            tabBarLabel: 'TRACK',
            tabBarIcon: (props) => (
              <TrackNavIcon {...props}/>
            ) 
          }}

        />
        <Tab.Screen
          name="Schedule"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'SCHEDULE',
            tabBarIcon: (props) => (
              <ScheduleNavIcon {...props}/>
            ) 
          }}
        />

        <Tab.Screen
          name="About"
          component={HomeScreen}
          options={{
            tabBarLabel: 'ABOUT',
            tabBarIcon: (props) => (
              <AboutNavIcon {...props}/>
            ) 
          }}
        />

        <Tab.Screen
          name="Support"
          component={DetailsScreen}
          options={{
            tabBarLabel: 'SUPPORT',
            tabBarIcon: (props) => (
              <SupportNavIcon {...props}/>
            ) 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
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
