import { Pressable, Text, View, Image } from "react-native";
import { LogoContainer } from "../components/LogoContainer";
import { TitleBanner } from "../components/TitleBanner";
const image = require('../assets/images/viewRoutesBTN.png');

export const AboutPage = ({ navigation }) => {
  return (
    <View>
      <LogoContainer></LogoContainer>
      <TitleBanner title="ABOUT THE E-JEEPNEYS"/>
      <View className="flex px-10 my-5 text-sm">
        <Text className="font-bold text-gray-dark mt-3 ">Ateneo Campus E-Jeepneys</Text>
        <Text className="text-gray-dark text-justify my-1">In 2012, Ateneo was the first academic institution to introduce an in-campus E-jeepney shuttle service—a feat that was made possible through a partnership with Meralco. Currently, it has four operating,  14-seater electric jeeps as a means for  students, employees, staff, and visitors to quickly go around the campus.</Text>
        <Text className="font-bold text-gray-dark mt-3 ">Routes and Operating Hours</Text>
        <Text className="text-gray-dark text-justify my-1">Currently, the E-jeepneys follow two routes: Line A and Line B. You may view the route map through the button above to check where the stations are located around the campus. The E-jeepneys operate on Mon-Fri (6AM-6PM) and Sat (6AM-1PM).</Text>
        <Text className="font-bold text-gray-dark mt-3">Contact Information</Text>
        <Text className="text-gray-dark text-justify my-1">For any issues and concerns, you may contact CSMO at 84266001 local 4104/4107 or CSD at local 4111 or through their email at csmo@ateneo.edu</Text>
      </View>
      <View className="relative flex items-center">
        <Image source={image} className="h-16 w-auto" resizeMode="contain"/>
        <Pressable
          className="absolute p-8 py-6"
          onPress={() => navigation.navigate('RoutesModal')}
        >
          <Text className="font-bold text-gray-dark text-base">View Map</Text>
        </Pressable>
      </View>
      
      
    </View>
  );
}


