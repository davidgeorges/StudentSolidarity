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
    chooseText: {
        marginTop: "20px",
        fontSize: "24px",
        color: "#09051C",
        alignSelf: "center",
        width:window.width >= 768 ? 345 : window.width <= 350 ? 280 : 325,
    },
    inputDescription: {
        marginTop: "63px",
        width: window.width >= 768 ? 345: window.width <=350 ? 280:325,
        height: "129px",
        boxSizing: "border-box",
        border: "1px solid #000000",
        boxShadow: "0px 0px 50px rgba(90, 108, 234, 0.07)",
        borderRadius: "22px",
        alignSelf: "center",
    },
    nextOpacity : {
        width: "141px",
        height: "57px",
        borderRadius: "15px",
        border: "1px solid #FFAA00",
        backgroundColor : "#FFAA00",
        justifyContent:'center',
        alignSelf:"center",
        marginTop:"275px",
    },
    nextText : {
        fontWeight: "400",
        fontSize: "16px",
        color:"white",
        alignSelf:"center",
    },
})




export default externalStyle