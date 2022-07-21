import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import externalStyle from "../Assets/Styles/SetLocation";


const SetLocation = ({ route,navigation }) => {

  return (
    <View style={externalStyle.mainView}>


      <TouchableOpacity style={externalStyle.arrOpacity} onPress={() => { navigation.navigate("AuthScreen", { screen: "UploadCard" , params: route.params}) }}>
        <Image style={externalStyle.imgArr} source={require("../Assets/Images/Arr.jpg")} />
      </TouchableOpacity>
      <Text style={externalStyle.setYourLocationText}>Set Your Location </Text>
      <Text style={externalStyle.infoText}>This data will be displayed in your account profile for security</Text>

      <View style={externalStyle.locationView}>

        <View style={externalStyle.topViewOpacity}>

          <Image style={externalStyle.locationImg} source={require("../Assets/Images/Location.jpg")} />
          <Text style={externalStyle.locationText}>Your Location</Text>

        </View>

        <View style={externalStyle.botViewOpacity}>

          <TouchableOpacity style={externalStyle.locationOpacity}>
            <Text style={externalStyle.setLocationText}>Set Location</Text>
          </TouchableOpacity>

        </View>

      </View>


      <TouchableOpacity style={externalStyle.nextOpacity} onPress={() => {navigation.navigate("AuthScreen",{screen:"SuccessRegister", params: route.params})}}>
        <Text style={externalStyle.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

};


export default SetLocation;
