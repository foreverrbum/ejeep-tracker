import { useState } from "react";
import { Text, View, Pressable, Image } from "react-native";
import { LogoContainer } from "../components/LogoContainer";
import { TitleBanner } from "../components/TitleBanner";
import  { LineASched, LineBSched } from "../components/Images/Schedules";
const LineA = require('../assets/viewRouteA.png');
const LineB = require('../assets/viewRouteB.png');

export const SchedulePage = ({ navigation }) => {
  const [line, handleLine] = useState('A');
  return (
    <>
      <LogoContainer></LogoContainer>
      <TitleBanner title={`ETA FOR LINE ${line} ${line === "A" ? "(GRADE SCHOOL)" : "(HIGH SCHOOL)" }`}/>
      <View className="mt-10 items-center">
        {line === "A"? <LineASched/> : <LineBSched/> }
      </View>

      <View className="">
        <Pressable
          className=""
          onPress={() => navigation.navigate('RoutesModal')}
        >
            <Image source={line === "A"? LineA:LineB} className=" w-full -mt-24" resizeMode="contain"/>

        </Pressable>
      </View>
    </>
    
  );
}
