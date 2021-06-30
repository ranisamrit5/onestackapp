import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '../../utils/theme';
import { Dimensions } from 'react-native'
let deviceHeight = Dimensions.get('window').height
let deviceWidth = Dimensions.get('window').width
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
    minHeight: deviceHeight - 100
  },
  keyBordContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  textInputView: {
    marginLeft: 24,
    marginRight: 24,
  },
  textInputViewRow: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems:'center',
    height:50
  },
  textInput: {
    marginTop: 20,
    fontSize: sizes.mediumLarge,
    color: colors.black,
    fontFamily: fonts.Regular,
    flex:1,
    height:50  
  },
  border: {
    marginTop: 5,
    height: 1,
    backgroundColor: colors.black,
  },
  hedingText: {
    marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    fontSize: sizes.extraLarge,
    color: colors.black,
    fontFamily: fonts.SemiBold
  },
  text: {
    marginTop: 5,
    marginLeft: 0,
    marginRight: 0,
    fontSize: sizes.medium,
    color: colors.mediumGray,
    fontFamily: fonts.Regular
  },
 
  button: {
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 24,
    marginRight: 24,
    height: 45,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: colors.black,
    marginBottom: 145
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.mediumLarge,
    fontFamily: fonts.SemiBold
  },
});