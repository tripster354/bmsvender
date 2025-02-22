import {StyleSheet} from 'react-native';
import Colors from '../../utils/theme/colors';
import {dH, dW} from '../../utils/dynamicHeigthWidth';
import fonts from '../../assets/fonts';
import {resizeUI} from '../../../Helper/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: resizeUI(10),
  },
  MainView: {
    paddingHorizontal: resizeUI(10),
  },
  TopViewStyle: {
    alignItems: 'center',
    marginTop: dH(58),
  },
  SetImageViewStyle: {
    backgroundColor: Colors.lightBlue,
    height: dH(198),
    width: dW(198),
    borderRadius: dW(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  PhoneIconStyle: {
    height: dH(80),
    width: dW(90),
  },
  EditImageStyle: {
    height: dH(60),
    width: dW(60),
  },

  CommonTextinputStyle: {
    marginTop: dH(65),
  },
  SendCodeTextStyle: {
    textAlign: 'right',
    marginTop: dH(18),
    color: Colors.lightBlue,
    fontFamily: fonts.NexaBold,
    fontSize: dW(25),
  },
  LinkProfileTextStyle: {
    textAlign: 'center',
    marginVertical: dH(43),
    fontFamily: fonts.NexaBold,
    color: Colors.black,
    fontSize: dW(32),
  },
  ContinueViewStyle: {
    marginTop: dH(117),
    marginBottom: dH(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  personalText: {
    marginLeft: dW(10),
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(30),
  },

  DropDownViewStyle: {
    marginTop: dH(64),
  },
  CommonTextinputStyle: {
    marginTop: dH(65),
  },
  CommonTextinputViewStyle: {
    marginTop: dH(46),
  },
  PercentageTextStyle: {
    marginTop: dH(13),
    textAlign: 'right',
    fontFamily: fonts.NexaBold,
    fontSize: dW(20),
    color: Colors.lightBlue,
  },
  OnboardingViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OnboardingTextStyle: {
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(40),
  },
  ApprovalTextStyle: {
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(30),
    left: dW(32),
  },
  ApprocalViewStyle: {
    marginTop: dH(26),
    flexDirection: 'row',
    alignItems: 'center',
  },
  InnerDotStyle: {
    height: dH(30),
    width: dW(30),
    backgroundColor: Colors.lightBlue,
    borderRadius: dW(30),
  },
  OuterBorderViewStyle: {
    borderWidth: 2,
    borderColor: Colors.lightBlue,
    height: dH(59),
    width: dW(59),
    borderRadius: dW(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ReferredTextStyle: {
    marginTop: dH(69),
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(40),
  },
  ReferrelCodeViewStyle: {
    marginTop: dH(44),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ReferrelTextStyle: {
    color: Colors.lightBlue,
    fontFamily: fonts.NexaBold,
    fontSize: dW(34),
  },
  ReferrelIconViewStyle: {
    flexDirection: 'row',
  },
  CommonIconStyle: {
    height: dH(49),
    width: dW(49),
  },
  HorizonalLineStyle: {
    marginTop: dH(30),
    height: dH(1),
    flex: 1,
    backgroundColor: Colors.borderColor,
  },
  ContinueViewStyle2: {
    marginTop: dH(117),
    marginBottom: dH(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  adddoctext: {
    marginTop: dH(2),
    marginLeft: 'auto',
    color: Colors.black,
    fontFamily: fonts.NexaBold,
    fontSize: dW(30),
  },
  docImage: {
    height: dH(200),
    width: dW(350),
    marginLeft: 'auto',
    marginTop: dH(20),
    borderRadius: dW(40),
    resizeMode: 'cover',
  },
});

export default styles;
