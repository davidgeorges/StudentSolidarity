import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const externalStyle = StyleSheet.create({
main : {
    flex: 2, justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
},
image : {
    width: 185,
    height: 133,
    alignSelf: "center",
    justifyContent: 'center'
},

text1 : {
    marginTop: "5%",
    alignSelf: "center",
    justifyContent: 'center',
    color:"#FFAA00",
    fontStyle:"normal",
    fontWeight:"400",
    fontSize:"32px",
    lineHeight:"43px",
    letterSpacing:"0.5px"
},

text2 :  {
    alignSelf: "center",
    justifyContent: 'center',
    fontWeight: "600", 
    fontSize: "13px", 
    lineHeight: "16px", 
    letterSpacing: "1px", 
    color: "#09051C",
},
})




export default externalStyle