import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '../../utils/theme';
import { Dimensions } from 'react-native'
let deviceHeight = Dimensions.get('window').height
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: colors.white
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  subView: {
    minHeight:deviceHeight-100
  },
  keyBordContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  textInputView: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
    height:50
  },
  textInputViewRow: {
    flexDirection: 'row',
    alignItems:'center',
    height:50  
  },
  textInput: {
    fontSize: sizes.mediumLarge,
    color: colors.black,
    fontFamily: fonts.Regular,
    flex:1,
    height:50  
  },
  border: {
    height: 1,
    backgroundColor: colors.black,
  },
  hedingText: {
    marginTop: 24,
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
    fontSize: sizes.extraLarge,
    color: colors.black,
    fontFamily: fonts.SemiBold
  },
  flagStyle: {
    alignSelf: 'center',
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    height: 20,
    width: 20,
    resizeMode: 'contain'
  },
  bottomImageStyle: {
    alignSelf: 'center',
    marginRight: 5,
    marginTop: 5,
    marginBottom: 5,
    width:300,
    height:120,
    resizeMode: 'contain'
  },
  mobileText: {
    marginTop: 5,
    marginBottom: 5,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    fontSize: sizes.small,
    color: colors.black,
    fontFamily: fonts.SemiBold
  },
  countyCodeText: {
    marginLeft: 0,
    marginRight: 0,
    fontSize: sizes.mediumLarge,
    color: colors.mediumGray,
    fontFamily: fonts.Regular
  },
  smallBlackText: {
    fontSize: sizes.small,
    marginRight: 24,
    marginLeft: 24,
    color:colors.black,
  },
  smallBoldText: {
    fontSize: sizes.small,
    fontFamily: fonts.Bold,
    color:colors.black,
    
  },
  button: {
    marginBottom:16,
    marginTop:16,
    marginLeft:24,
    marginRight:24,
    height: 45,
    borderRadius: 15,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor: colors.black,
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.mediumLarge,
    fontFamily:fonts.SemiBold
  },
});