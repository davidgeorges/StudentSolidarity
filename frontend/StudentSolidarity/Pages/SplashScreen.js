import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import externalStyle from "../Assets/Styles/SplashScreen";


const SplashScreen = ({ navigation }) => {

  useEffect(() => {

    setTimeout(() => {
      navigation.navigate("AuthScreen",{screen: "Login"})
    }, 1500)

  }, [])

  return (
    <View style={externalStyle.main}>
      <Image style={externalStyle.image} source={require("../Assets/Images/FoodBank.jpg")} />
      <Text style={externalStyle.text1}>StudentSolidarity</Text>
      <Text style={externalStyle.text2}>Ask or Share your food !</Text>
    </View>
  );

};


export default SplashScreen;
