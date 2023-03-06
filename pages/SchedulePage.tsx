import { useState } from "react";
import { Text, View } from "react-native";
import { LogoContainer } from "../components/LogoContainer";
import { TitleBanner } from "../components/TitleBanner";
export const SchedulePage = ({ navigation }) => {
  const [line, handleLine] = useState('A');
  return (
    <>
      <LogoContainer></LogoContainer>
      <TitleBanner title={`ETA FOR LINE ${line}`}/>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Schedule Screen</Text>
      </View>
    </>
    
  );
}
