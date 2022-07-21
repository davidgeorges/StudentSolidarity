import { StyleSheet, Dimensions } from 'react-native'



const window = Dimensions.get("window");




const externalStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "white",
    },
    arrOpacity: {
        width: "45px",
        height: "45px",
        backgroundColor: 'rgba(218, 99, 23, 0.1)',
        borderRadius: "15px",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "25px",
        marginTop: "38px",
    },
    imgArr: {
        width: "10px",
        height: "16.36px",
    },
    setYourLocationText: {
        width: window.width >= 768 ? 345 : window.width <= 350 ? 280 : 325,
        marginTop: "20px",
        fontSize: "25px",
        color: "#09051C",
        alignSelf: "center"
    },
    infoText: {
        marginTop: "20px",
        fontSize: "12px",
        color: "#000000",
        width: window.width >= 768 ? 345 : window.width <= 350 ? 280 : 325,
        alignSelf: "center",
    },
    locationView: {
        marginTop: "20px",
        width: window.width >= 768 ? 345 : window.width <= 350 ? 280 : 325,
        height: "129px",
        boxSizing: "border-box",
        border: "1px solid #000000",
        boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.07)",
        borderRadius: "22px",
        alignSelf: "center",
    },
    topViewOpacity:{
       height:'48%',
       display: "flex",
       flexDirection: "row",
    },
    botViewOpacity:{
        alignSelf:"center",
        width:'52%',
     },
    locationImg: {
        width: "33px",
        height: "33px",
        marginTop: "16px",
        marginLeft: "11px"
    }, locationText: {
        fontWeight: "400",
        fontSize: "16px",
        marginTop: "22px",
        marginLeft: "11px"
    },
    locationOpacity: {
        boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.07)",
        borderRadius: "15px",
        height: "57px",
        width: window.width >= 768 ? 325 : window.width <= 350 ? 260 : 305,
        backgroundColor:"rgba(90, 108, 234, 0.07)",
        alignSelf:"center",
    },
    setLocationText: {
        marginTop: "20px",
        fontSize: "16px",
        color: "#09051C",
        alignSelf: "center",
        fontWeight: 'bold'
    },
    nextOpacity: {
        width: "141px",
        height: "57px",
        borderRadius: "15px",
        border: "1px solid #FFAA00",
        backgroundColor: "#FFAA00",
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: "305px",
    },
    nextText: {
        fontWeight: "400",
        fontSize: "16px",
        color: "white",
        alignSelf: "center",
    },
})




export default externalStyle