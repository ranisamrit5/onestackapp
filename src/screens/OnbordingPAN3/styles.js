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
  textCenter: {
    marginTop: 5,
    marginLeft: 0,
    marginBottom: 97,
    fontSize: sizes.medium,
    color: colors.mediumGray,
    fontFamily: fonts.Regular,
    textAlign: "center"
  },
  rowView: {
    flexDirection: "row",
    maxWidth: deviceWidth - 50
  },
  checkImage: {
    height: 30,
    width: 30,
    marginLeft: 20,
    resizeMode: 'contain'
  },
  footer: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

  },
  smallBlackText: {
    fontSize: sizes.small,
    marginRight: 24,
    marginLeft: 0,
    color: colors.black,
  },
  smallBoldText: {
    fontSize: sizes.small,
    fontFamily: fonts.Bold,
    color: colors.black,

  },
  regularBlackText: {
    fontSize: sizes.regular,
    marginRight: 24,
    marginTop: 40,
    color: colors.black,
    textAlign: "center"
  },
  regularBoldText: {
    fontSize: sizes.regular,
    fontFamily: fonts.Bold,
    color: colors.black,

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
  buttonPopup: {
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 24,
    marginRight: 24,
    height: 45,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.mediumLarge,
    fontFamily: fonts.SemiBold
  },
});