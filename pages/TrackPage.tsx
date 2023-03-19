 
import { Text, View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export const TrackPage = ({ navigation }) => {
  const location = {
    latitude: 14.640037858362918,
    longitude: 121.07847243952978,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  }
  return (
    <View className="flex-1 items-center content-center">
      <View className="flex-1 justify-center w-full relative">
        <MapView 
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          mapType='hybrid'
          region={location}
        />
        <View className="absolute h-32 bg-white z-10 bottom-0 w-full"></View>
      </View> 
    </View>
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
