import { Text, View } from "react-native";
 
export const TrackPage = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}