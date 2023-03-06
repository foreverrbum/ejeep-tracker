import { Text, View } from "react-native";
 
export const SchedulePage = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Schedule Screen</Text>
    </View>
  );
}
