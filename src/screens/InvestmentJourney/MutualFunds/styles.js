import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '../../../utils/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  borderbox: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16
  },
  textStyle: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: sizes.medium,
    color: colors.mediumGray,
    fontFamily: fonts.Regular
  },
  rowView: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  textStyleSemiBold: {
    fontSize: sizes.extraLarge32,
    color: colors.blackColor,
    fontFamily: fonts.SemiBold,
    height: 40,
    marginTop: -7,
    marginLeft: 5
  },
  textStyleRegular: {
    fontSize: sizes.extraLarge,
    color: colors.blackColor,
    fontFamily: fonts.Regular,
    height: 32

  },
  textStyleDesc: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: sizes.small,
    color: colors.mediumGray,
    fontFamily: fonts.Regular
  },
  button: {
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
  },
  buttonText: {
    marginBottom: 10,
    marginTop: 10,
    color: colors.whiteColor,
    fontSize: sizes.small,
    fontFamily: fonts.Medium
  },
  seperatorView: {
    marginBottom: 16,
    marginTop: 16,
    backgroundColor: colors.seperatorColor,
    height: 5
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center'
  },
  titletextStyleSemiBold: {
    fontSize: sizes.mediumLarge,
    color: colors.blackColor,
    fontFamily: fonts.SemiBold,
  },
  viewAlltextStyleSemiBold: {
    fontSize: sizes.small,
    color: colors.primaryColor,
    fontFamily: fonts.SemiBold,
  },
  tabBack: {

    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 16,

  },
  rowImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 5
  },
  rowtitletextStyle: {
    marginLeft: 16,
    marginRight: 40,
    fontSize: sizes.medium,
    color: colors.mediumGray,
    fontFamily: fonts.Regular
  },
  rowseperatorView: {
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: colors.centerBorderColor,
    height: 1
  },
  rowViewBack: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  rowsubtitletextStyle: {
    marginLeft: 16,
    marginRight: 40,
    fontSize: sizes.small,
    color: colors.mediumGray,
    fontFamily: fonts.Regular
  },
  rowtitletextMediumStyle: {
    marginLeft: 16,
    marginRight: 40,
    fontSize: sizes.medium,
    color: colors.blackColor,
    fontFamily: fonts.Medium
  },
  rowtitletextMediumStyleGreen: {
    marginLeft: 16,
    marginRight: 40,
    fontSize: sizes.medium,
    color: colors.greenColor,
    fontFamily: fonts.Medium
  },
});
