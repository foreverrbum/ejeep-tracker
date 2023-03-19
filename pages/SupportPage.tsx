import { Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView, Pressable, Modal, StyleSheet, Button, KeyboardAvoidingView, Platform } from "react-native";
import { useRef, useState } from "react";
import { LogoContainer } from "../components/LogoContainer";
import { ArrowLeft } from "../assets/svgs/ArrowLeft";
export const SupportPage = ({ navigation }) => {
  const ref = useRef();
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);
  const [value, onChangeText] = useState('Type Here');
  const [showModal, handleShowModal] =useState(true)
  return (

    <>
    <View className="flex flex-1 items-center content-center ">
      <Modal
        animationType="fade"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          handleShowModal(!showModal);
        }}>
        <View className="flex flex-1  bg-gray-light/50 items-center content-center my-auto">
          <View className="bg-white   m-5 rounded-lg p-9 items-center my-auto shadow ">
            <Text className="text-base text-gray-dark mb-5">We appreciate your feedback!</Text>
            <Pressable
              onPress={() => {
                handleShowModal(!showModal);
                onChangeText('')
                navigation.navigate('Home')
                }}>
                  <View className="flex flex-row">
                  <View className="my-auto mr-3 "><ArrowLeft/></View>
                  <Text className="text-blue-dark text-sm font-semibold">Back to Home</Text>

                  </View>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    <View className="">
      <LogoContainer></LogoContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}  >
      <KeyboardAvoidingView
        behavior="padding"
        className="flex"
      >
        <View className="px-10 py-5 flex h-full justify-between -mb-36 ">
          <Text className="font-bold text-gray-dark text-xl mb-4 mt-5">What's the issue?</Text>
          <ScrollView persistentScrollbar={true} className="text-gray-dark text-base bg-gray-light rounded-md p-2 grow">
            <TextInput
                editable
                multiline={true}
                numberOfLines={20}
                textAlignVertical="top"
                onChangeText={text => {
                  onChangeText(text);
                }}
                value={value}
                className="pb-24 min-h-full"
              />
          </ScrollView>
          <View className="flex items-center">
            <Pressable
              className="my-5 bg-blue-dark rounded-md px-6 py-1 "
              onPress={() => handleShowModal(true)}
            >
              <Text className="font-semibold text-white text-base ">Submit</Text>
            </Pressable>
          </View>
        </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
    </>
  );
}

