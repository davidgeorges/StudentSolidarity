import { StyleSheet, Dimensions } from 'react-native'



const window = Dimensions.get("window");




const externalStyle = StyleSheet.create({
    mainView : {
        flex : 1,
        backgroundColor: "white",
    },
    imageFoodBank: {
        marginTop: window.width >= 768 ? 40 : 47,
        width: window.width >= 768 ? 225 : 200,
        height: window.width >= 768 ? 145 : 133,
        alignSelf: "center",
        justifyContent: 'center'
    },
    title: {
        alignSelf: "center",
        justifyContent: 'center',
        color: "#FFAA00",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: window.width >= 768 ? 36:32,   
        lineHeight: "43px",
        letterSpacing: "0.5px",
    },
    askOrShare: {
        marginTop: "5px",
        alignSelf: "center",
        justifyContent: 'center',
        fontWeight: "600",
        fontSize: window.width >= 768 ? 16:14,
        lineHeight: "16px",
        letterSpacing: "1px",
        color: "#09051C",
    },
    register: {
        marginTop: window.width >= 768 ? "40px":"30px",
        alignSelf: "center",
        justifyContent: 'center',
        fontWeight: "400",
        fontSize: window.width >= 768 ? 22:16,
        textAlign: "center",
        color: "#09051C",
        marginBottom:"24px",
    },
    emailInput: {
        width:window.width >= 768 ? 380: window.width <=350 ? 295:325,
        border: "1px solid #000000", 
        borderRadius: "15px",
        alignSelf: "center",
        justifyContent: 'center',
        height :"57px",
    },
    otherInput: {
        marginTop:"12px",
        width:window.width >= 768 ? 380: window.width <=350 ? 295:325,
        border: "1px solid #000000", 
        borderRadius: "15px",
        alignSelf: "center",
        justifyContent: 'center',
        height :"57px",
    },
    secondView: {
        width : window.width >= 768 ? 380: window.width <=350 ? 295:325,
        display:"flex",
        flexDirection:"column",
        marginTop:"34px",
        alignItems:"center",  
        alignSelf:"center",
        
    },
    secondViewText : {
        height: "20px",
        fontWeight: "400",
        fontSize: "12px",
        color: "#FFAA00",
        textDecorationLine: "underline",
        marginBottom:'6px'
    },
    registerOpacity : {
        width: "141px",
        height: "57px",
        borderRadius: "15px",
        border: "1px solid #FFAA00",
        backgroundColor : "#FFAA00",
        justifyContent:'center',
    },
    registerText : {
        fontWeight: "400",
        fontSize: "16px",
        color:"white",
        alignSelf:"center",
    },errorText :{
        color:"red",
        fontSize: "10px",
        width:window.width >= 768 ? 380: window.width <=350 ? 295:325,
        alignSelf:"center",
    }
})




export default externalStyle