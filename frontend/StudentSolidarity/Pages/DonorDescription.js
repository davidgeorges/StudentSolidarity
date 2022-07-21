import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import externalStyle from "../Assets/Styles/DonorDescription";


const DonorDescription = ({ route,navigation }) => {

  return (
    <View style={externalStyle.mainView}>
      <TouchableOpacity style={externalStyle.arrOpacity} onPress={() => { navigation.navigate("AuthScreen", { screen: "ChooseAccount" , params: route.params}) }}>
        <Image style={externalStyle.imgArr} source={require("../Assets/Images/Arr.jpg")} />
      </TouchableOpacity>
      <Text style={externalStyle.chooseText}>Write a description about yourself !</Text>

      <TextInput style={externalStyle.inputDescription} placeholder="Write an description..."></TextInput>

        <TouchableOpacity style={externalStyle.nextOpacity}onPress={() => { navigation.navigate("AuthScreen", { screen: "UploadCard", params: route.params}) }}>
          <Text style={externalStyle.nextText}>Next</Text>
        </TouchableOpacity>
    </View>
  );

};


export default DonorDescription;
