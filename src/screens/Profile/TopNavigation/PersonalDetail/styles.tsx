import { StyleSheet } from "react-native";
import Colors from "../../../../utils/theme/colors";
import { dH, dW } from "../../../../utils/dynamicHeigthWidth";
import fonts from "../../../../assets/fonts";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:dW(20),
        // backgroundColor:'blue'
    },
    CommonTextinputStyle:{
        marginTop:dH(65),
    },
    SendCodeTextStyle:{
        textAlign:'right',
        marginTop:dH(18),
        color:Colors.lightBlue,
        fontFamily:fonts.NexaBold,
        fontSize:dW(25)
    },
    LinkProfileTextStyle:{
        textAlign:'center',
        marginVertical:dH(43),
        fontFamily:fonts.NexaBold,
        color:Colors.black,
        fontSize:dW(32)
    },
    ContinueViewStyle:{
        marginTop:dH(117),
        marginBottom:dH(100),
        justifyContent:"center",
        alignItems:"center"
    }
})


export default styles