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
        marginTop: 6,
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

    login: {
        marginTop: window.width >= 768 ? 37:45,
        alignSelf: "center",
        justifyContent: 'center',
        fontWeight: "400",
        fontSize: window.width >= 768 ? 22:16,
        textAlign: "center",
        color: "#09051C",
        marginBottom:"27px",
    },
    emailInput: {
        width:window.width >= 768 ? 380: window.width <=350 ? 295:325,
        border: "1px solid #000000", 
        borderRadius: "15px",
        alignSelf: "center",
        justifyContent: 'center',
        height :"57px",
    },
    passwordInput: {
        marginTop:"12px",
        width:window.width >= 768 ? 380: window.width <=350 ? 295:325,
        border: "1px solid #000000", 
        borderRadius: "15px",
        alignSelf: "center",
        justifyContent: 'center',
        height :"57px",
    },
    keepSignedOpacity: {
        width: "22px", 
        height: "22px",
        border: "1px solid #000000", 
        borderRadius: "15px"
    },
    secondView: {
        width : window.width >= 768 ? 380: window.width <=350 ? 295:325,
        display:"flex",
        flexDirection:"row",
        alignSelf:"center",
        marginTop:"16px",
    },
    keepSigned:{
        height: "20px", 
        fontWeight: "400", 
        fontSize: "12px", 
        color: "#000000",
        marginLeft:"8px",
        alignSelf:"center",
    },continueWith:{
        height: "20px", 
        fontWeight: "400", 
        fontSize: "12px", 
        color: "#000000",
        alignSelf:"center",
    },
    thirdView: {
        width : window.width >= 768 ? 380: window.width <=350 ? 295:325,
        display:"flex",
        flexDirection:"row",
        marginTop:"16px",
        alignSelf:"center",
    },
    continueGoogle: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        width : "152px",
        height : "57px",
        border: "1px solid #000000", 
        borderRadius: "15px",
        marginLeft:"auto",
    },
    imageGoogle : {
        width: "24.4px",
        height: "25px",
        marginRight:"12.6px",
    },
    lastView: {
        width : window.width >= 768 ? 380: window.width <=350 ? 295:325,
        display:"flex",
        flexDirection:"column",
        marginTop:"16px",
        alignItems:"center",  
        alignSelf:"center",
    },
    lastViewText : {
        height: "20px",
        fontWeight: "400",
        fontSize: "12px",
        color: "#FFAA00",
        textDecorationLine: "underline",
    },
    loginOpacity : {
        marginTop:'6px',
        width: "141px",
        height: "57px",
        borderRadius: "15px",
        border: "1px solid #FFAA00",
        backgroundColor : "#FFAA00",
        justifyContent:'center',
    },
    loginText : {
        fontWeight: "400",
        fontSize: "16px",
        color:"white",
        alignSelf:"center",
    },
})




export default externalStyle