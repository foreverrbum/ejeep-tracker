import { Text, View } from "react-native";
 
export const About = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
    </View>
  );
}
