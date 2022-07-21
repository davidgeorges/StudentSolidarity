import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import externalStyle from "../Assets/Styles/FailedRegister";


const FailedRegister = ({ navigation }) => {

  return (
    <View style={externalStyle.main}>   
      <Image style={externalStyle.image} source={require("../Assets/Images/Failed.jpg")} />
      <Text style={externalStyle.failedText}>Critical Error !</Text>
      <Text style={externalStyle.infoText}>Error during registration : ERR MESSAGE.</Text>

      <TouchableOpacity style={externalStyle.nextOpacity} onPress={() => {navigation.navigate("AuthScreen",{screen:"Login"})}}>
        <Text style={externalStyle.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

};


export default FailedRegister;
