import React from 'react';
import { Text, View, Image,TouchableOpacity } from 'react-native';
import externalStyle from "../Assets/Styles/UploadCard";


const UploadCard = ({ route,navigation }) => {

  return (
    <View style={externalStyle.mainView}>
      <TouchableOpacity style={externalStyle.arrOpacity} onPress={() => { 
        const screenName = route.params.role === "student" ? "ChooseAccount" : "DonorDescription";
        navigation.navigate("AuthScreen", { screen: screenName , params: route.params}) 
        }}>
        <Image style={externalStyle.imgArr} source={require("../Assets/Images/Arr.jpg")} />
      </TouchableOpacity>
      <Text style={externalStyle.chooseText}>Upload Your ID OR STUDENT CARD</Text>
      <Text style={externalStyle.infoText}>Verification can take up to 4 days</Text>

      <TouchableOpacity style={externalStyle.fromGalleryOpacity}>
        <Image style={externalStyle.imgType} source={require("../Assets/Images/fromGallery.jpg")} />
      </TouchableOpacity>

      <TouchableOpacity style={externalStyle.takePhotoOpacity}>
        <Image style={externalStyle.imgType} source={require("../Assets/Images/takePhoto.jpg")} />
      </TouchableOpacity>

        <TouchableOpacity style={externalStyle.nextOpacity} onPress={() => { 
          navigation.navigate("AuthScreen", { screen: "SetLocation", params: route.params }) 
          }}>
          <Text style={externalStyle.nextText}>Next</Text>
        </TouchableOpacity>
    </View>
  );

};


export default UploadCard;
