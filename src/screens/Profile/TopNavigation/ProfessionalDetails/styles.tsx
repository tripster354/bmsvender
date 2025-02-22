import { StyleSheet } from "react-native";
import Colors from "../../../../utils/theme/colors";
import { dH, dW } from "../../../../utils/dynamicHeigthWidth";
import fonts from "../../../../assets/fonts";


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:dW(20)
    },
    DropDownViewStyle:{
        marginTop:dH(64)
    },
    KYCTextStyle:{
        marginTop:dH(53),
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(40),
    },
    DocumentListViewStyle:{
        marginTop:dH(30)
    },
    DocumentImageStyle:{
        height:dH(204),
        width:dW(204),
        borderRadius:dW(11),
        marginRight:dW(24)
    },
    BankDetailTextStyle:{
        marginTop:dH(56),
        color:Colors.black,
        fontFamily:fonts.NexaBold,
        fontSize:dW(40)
    },
    BankDetailMainCardViewStyle:{
        flexDirection:'row' ,
        alignItems:'center' 
    },
    BankImageStyle:{
        height:dH(116),
        width:dW(116)
    },
    BankNameStyle:{
        color:Colors.lightBlue,
        fontFamily:fonts.NexaBold,
        fontSize:dW(18)
    },
    AccountTextStyle:{
        fontFamily:fonts.NexaBook,
        color:Colors.dyGray,
        fontSize:dW(18)
    },
    AccountTypeTextStyle:{
        color:Colors.OffRed,
        fontFamily:fonts.NexaBook,
        fontSize:dW(18)
    },
    ContinueViewStyle:{
        marginTop:dH(117),
        marginBottom:dH(100),
        justifyContent:"center",
        alignItems:"center"
    }
})

export default styles