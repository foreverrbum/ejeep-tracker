import {Text, View} from 'react-native'

export const TitleBanner = ({title}) => {
  return(
    <View className='flex bg-gray-light py-2 items-center'>
      <Text className='text-blue-dark font-bold'>{title}</Text>
    </View>
  )
}
