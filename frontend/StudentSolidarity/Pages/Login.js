import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import externalStyle from "../Assets/Styles/Login";


const Login = ({ navigation }) => {

  const [keepSigned,setKeepSigned] = useState("false");
  const [userData,setUserData] = useState({
    email:"",
    password:"",
  })



  return (
    <View style={externalStyle.mainView}>

      <Image style={externalStyle.imageFoodBank} source={require("../Assets/Images/FoodBank.jpg")} />
      <Text style={externalStyle.title}>StudentSolidarity</Text>
      <Text style={externalStyle.askOrShare}>Ask or Share your food !</Text>
      <Text style={externalStyle.login}>Login To Your Account</Text>

      <TextInput style={externalStyle.emailInput}  placeholder='Email' onChangeText={email => setUserData({...userData,email})} />
      <TextInput style={externalStyle.passwordInput} placeholder='Password'  onChangeText={password => setUserData({...userData,password})}/>

      <View style={externalStyle.secondView}>
        <TouchableOpacity style={[externalStyle.keepSignedOpacity,{backgroundColor: keepSigned ? "white" : "#FFAA00"}]} onPress={()=>{setKeepSigned(!keepSigned)}}></TouchableOpacity>
        <Text style={externalStyle.keepSigned}>Keep Me Signed In</Text>
      </View>

      <View style={externalStyle.thirdView}>
        <Text style={externalStyle.continueWith}>Or Continue With</Text>
        <TouchableOpacity style={externalStyle.continueGoogle}>
          <Image style={externalStyle.imageGoogle} source={require("../Assets/Images/Google.jpg")} />
          <Text>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={externalStyle.lastView}>
        <Text style={externalStyle.lastViewText} onPress={()=>{navigation.navigate("AuthScreen", { screen: "Register" })}} >Create an account ?</Text>
        <Text style={externalStyle.lastViewText} >Forgot Your Password?</Text>
        <TouchableOpacity style={externalStyle.loginOpacity} onPress={()=>{console.log("Test : ",userData)}}>
          <Text style={externalStyle.loginText} >Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

};


export default Login;
