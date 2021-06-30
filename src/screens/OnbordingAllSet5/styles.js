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
    minHeight: deviceHeight - 100
  },
  keyBordContainer: {
    flex: 1,
    flexDirection: 'column',
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
  columnView: {
    marginBottom:15,
    flexDirection: 'column'
  },
  checkImage: {
    height: 30,
    width: 30,
    marginLeft: 18,
    resizeMode: 'contain'
  },
  rowView: {
    flexDirection: 'row'
  },
  keyTextB: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 24,
    marginRight: 24,
    fontSize: sizes.mediumLarge,
    color: colors.black,
    fontFamily: fonts.SemiBold
  },
  keyTextR: {
    marginTop: 0,
    marginBottom: 5,
    fontSize: sizes.medium,
    color: colors.black,
    fontFamily: fonts.Regular
  },
  keyTextS: {
    marginTop: 0,
    marginBottom: 0,
    fontSize: sizes.small,
    color: colors.gray,
    fontFamily: fonts.Regular
  },
  text: {
    marginTop: 5,
    marginLeft: 24,
    marginRight: 24,
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
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.mediumLarge,
    fontFamily: fonts.SemiBold
  },
});