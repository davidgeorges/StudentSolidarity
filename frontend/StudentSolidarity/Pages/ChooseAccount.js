import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import externalStyle from "../Assets/Styles/ChooseAccount";


const ChooseAccount = ({ route, navigation }) => {

  const [roleSelected, setRoleSelected] = useState("student");

  return (
    <View style={externalStyle.mainView}>
      <TouchableOpacity style={externalStyle.arrOpacity} onPress={() => { navigation.navigate("AuthScreen", { screen: "Register" }) }}>
        <Image style={externalStyle.imgArr} source={require("../Assets/Images/Arr.jpg")} />
      </TouchableOpacity>
      <Text style={externalStyle.chooseText}>Choose your account type</Text>

      <TouchableOpacity style={[externalStyle.studentOpacity, { borderColor: roleSelected === "student" ? "#FFAA00" : "black" }]} onPress={() => { setRoleSelected("student") }} >
        <Image style={externalStyle.imgType} source={require("../Assets/Images/Student.jpg")} />
        <Text style={externalStyle.textType}>Student</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[externalStyle.donorOpacity, { borderColor: roleSelected === "donor" ? "#FFAA00" : "black" }]} onPress={() => { setRoleSelected("donor") }}>
        <Image style={externalStyle.imgType} source={require("../Assets/Images/Donor.jpg")} />
        <Text style={externalStyle.textType} >Donor</Text>
      </TouchableOpacity>

      <TouchableOpacity style={externalStyle.nextOpacity} onPress={() => {
        route.params = { ...route.params, role: roleSelected };
        const screenName = roleSelected === "student" ? "UploadCard" : "DonorDescription";
        navigation.navigate("AuthScreen", { screen: screenName, params: route.params }

        )}
      } >
        <Text style={externalStyle.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

};


export default ChooseAccount;
