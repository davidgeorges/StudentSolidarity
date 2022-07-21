import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const externalStyle = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    image: {
        width: 172,
        height: 162,
        alignSelf: "center",
        justifyContent: 'center',
        marginTop:"135px",
    },
    congratsText:{
        fontSize:"30px",
        marginTop:"33px",
        color:"#FFAA00",
    },infoText: {
        marginTop: "20px",
        fontSize:  window.width > 350 ? 12 : 10,
        color: "#000000",
        alignSelf: "center",
    },
    nextOpacity: {
        width: "141px",
        height: "57px",
        borderRadius: "15px",
        border: "1px solid #FFAA00",
        backgroundColor: "#FFAA00",
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: "205px",
    },
    nextText: {
        fontWeight: "400",
        fontSize: "16px",
        color: "white",
        alignSelf: "center",
    },

})




export default externalStyle