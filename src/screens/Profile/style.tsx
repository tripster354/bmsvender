import { StyleSheet } from "react-native";
import Colors from "../../utils/theme/colors";
import { dH, dW } from "../../utils/dynamicHeigthWidth";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:dW(35)
    },
    TopViewStyle:{
        alignItems:'center',
        marginTop:dH(58)
    },
    SetImageViewStyle:{
        backgroundColor:Colors.lightBlue,
        height:dH(198),
        width:dW(198),
        borderRadius:dW(200),
        justifyContent:"center",
        alignItems:'center'
    },
    PhoneIconStyle:{
        height:dH(80),
        width:dW(90)
    },
    EditImageStyle:{
        height:dH(60),
        width:dW(60)
    },

})

export default styles