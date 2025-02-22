import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { dW } from '../../utils/dynamicHeigthWidth'
import fonts from '../../assets/fonts'
import Colors from '../../utils/theme/colors'

const OtpView = ({onOtp}: {onOtp: (otpCode: string) => void}) => {
  return (
    <OTPInputView
    style={styles.root}
    pinCount={4}
    autoFocusOnLoad={false}
    keyboardAppearance={'dark'}
    keyboardType={'number-pad'}
    selectionColor={'white'}
    codeInputFieldStyle={styles.codeInputFieldStyle}
    codeInputHighlightStyle={styles.codeInputHighlightStyle}
    onCodeFilled={onOtp}
  />
  )
}

export default OtpView

const styles = StyleSheet.create({
    root: {
        width: '100%',
        // marginHorizontal: 45,
      },
      codeInputFieldStyle: {
        width: dW(117),
        height: dW(117),
        borderRadius: dW(15),
        backgroundColor: '#FFFFFF',
        color: Colors.black,
        fontSize: dW(32),
        fontFamily: fonts.NexaBold,
        fontWeight: '300',
        borderWidth: dW(1),
        borderColor: '#CCCCCC',
      },
      codeInputHighlightStyle: {
        borderColor: '#00C6FF',
        borderWidth: dW(1),
        color: 'black',
      },
      
})