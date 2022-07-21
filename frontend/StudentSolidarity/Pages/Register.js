import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import externalStyle from "../Assets/Styles/Register";


const Register = ({ navigation }) => {

  const [userData,setUserData] = useState({
    firstname : "",
    lastname:"",
    email:"",
    password:"",
  })

  const [errorsForm, setErrorsForm] = useState({
    firstnameErr: "",
    lastnameErr: "",
    emailErr: "",
    passwordErr: "",
  });

  const [message, setMessage] = useState("");
  return (
    <View style={externalStyle.mainView}>

      <Image style={externalStyle.imageFoodBank} source={require("../Assets/Images/FoodBank.jpg")} />
      <Text style={externalStyle.title}>StudentSolidarity</Text>
      <Text style={externalStyle.askOrShare}>Ask or Share your food !</Text>
      <Text style={externalStyle.register}>Sign Up</Text>

      <TextInput style={externalStyle.emailInput} placeholder='Firstname' onChangeText={firstname => {setUserData({...userData,firstname})}}/>
      <Text style={externalStyle.errorText}>{errorsForm.firstnameErr.length > 0 ? errorsForm.firstnameErr : ""}</Text>
      <TextInput style={externalStyle.otherInput} placeholder='Lastname' onChangeText={lastname => {setUserData({...userData,lastname})}}/>
      <Text style={externalStyle.errorText}>{errorsForm.lastnameErr.length > 0 ? errorsForm.lastnameErr : ""}</Text>
      <TextInput style={externalStyle.otherInput} placeholder='Email' onChangeText={email => {setUserData({...userData,email})}}/>
      <Text style={externalStyle.errorText}>{errorsForm.emailErr.length > 0 ? errorsForm.emailErr : ""}</Text>
      <TextInput style={externalStyle.otherInput} placeholder='Password' onChangeText={password=> {setUserData({...userData,password})}}/>
      <Text style={externalStyle.errorText}>{errorsForm.passwordErr.length > 0 ? errorsForm.passwordErr : ""}</Text>


      <View style={externalStyle.secondView}>
        <Text style={externalStyle.secondViewText} onPress={()=>{navigation.navigate("AuthScreen",{screen:"Login"})}} >Already have an account ? Sign in </Text>
        <TouchableOpacity style={externalStyle.registerOpacity} onPress={()=>{navigation.navigate("AuthScreen",{screen:"ChooseAccount",params:userData}),console.log("Test : ",userData)}}>
          <Text style={externalStyle.registerText} >Register</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

};


export default Register;
