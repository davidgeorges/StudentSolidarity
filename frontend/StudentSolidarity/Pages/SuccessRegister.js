import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import externalStyle from "../Assets/Styles/SuccesRegister";


const SuccessRegister = ({ navigation }) => {

  return (
    <View style={externalStyle.main}>   
      <Image style={externalStyle.image} source={require("../Assets/Images/Success.jpg")} />
      <Text style={externalStyle.congratsText}>Congrats !</Text>
      <Text style={externalStyle.infoText}>You will be able to use the application after your status is verified.</Text>

      <TouchableOpacity style={externalStyle.nextOpacity} onPress={() => {navigation.navigate("AuthScreen",{screen:"Login"})}}>
        <Text style={externalStyle.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

};


export default SuccessRegister;
