import { Text, View } from "react-native";
 
export const AboutPage = ({ navigation }) => {
  console.log(navigation)
  return (
    <View className="flex flex-1 items-center justify-center mb-auto mt-auto">
      <Text>About Screen</Text>
    </View>
  );
}

