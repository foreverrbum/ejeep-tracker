import { Pressable, View, Text } from "react-native"

export const ScheduleTabs = ({line, handleLine}) => {
  return(
    <>
      <View className="flex flex-row mt-5 ">
        <Pressable
          onPress={()=> handleLine('A')}
          className={`flex content-center grow items-center  shadow rounded-tr-xl bg-white p-2 text-line-a ${line==='A' && 'z-10'}`}>
          <Text className="text-base text-line-a font-semibold">LINE A</Text>
          <Text className="text-line-a font-semibold">(GRADE SCHOOL)</Text>
        </Pressable>
        <Pressable
          onPress={()=> handleLine('B')}
          className={`flex content-center grow items-center shadow rounded-tl-xl bg-white p-2 text-line-b ${line==='B' && 'z-10'}`}>
          <Text className=" text-base text-line-b font-semibold">LINE B</Text>
          <Text className="text-line-b font-semibold">(HIGH SCHOOL)</Text>
        </Pressable>
      </View>
      <View className="bg-white flex flex-row">
        <View className={`flex grow bg-white h-2 ${line==="A" ? 'z-10': 'shadow'}`}>
          </View>
          <View className={`flex grow bg-white h-2 ${line==="B" ? 'z-10': 'shadow'}`}>
          </View>
      </View>
    </>
  )
}
