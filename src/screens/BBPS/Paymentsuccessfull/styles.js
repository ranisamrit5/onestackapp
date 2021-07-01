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
  Img: {
    height: 70,
    width: 70,
    alignSelf: "center",
    tintColor: colors.greenColor
  },
  rowbox: {
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    paddingTop: 16,
  },
  hadertext: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    paddingTop: 16,
  },
  Large_Text: {
    fontSize: sizes.extraLarge32,
    color: colors.black,
    alignSelf: "center",
    fontFamily: fonts.Medium,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    paddingTop: 16,
    lineHeight: 40
  },

  regularMidium_Text: {
    fontSize: sizes.medium,
    color: colors.blackColor,
    alignSelf: "center",
    fontFamily: fonts.Regular
  },

  rowView: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  titletextStyleSmall: {
    fontSize: fonts.medium,
    fontFamily: fonts.SemiBold,
    lineHeight: 22,
    color: colors.blackColor
  },
  borderbox: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 16,

  },
  rowImageStyle: {
    width: 30,
    height: 30,
    backgroundColor: colors.fair,
    alignSelf: "center"
  },
  rowtitletextStyle: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: sizes.medium,
    color: colors.blackColor,
    fontFamily: fonts.Regular,
    alignSelf:"center",
    lineHeight:22
  },
  rowtitletextStylesmall:{
    fontSize:sizes.small,
    fontFamily:fonts.Regular,
    color:colors.mediumGray,
    marginLeft: 16,
    marginRight: 16,
    lineHeight:20
  },
  rowtitletextStylemedium:{
    fontSize: sizes.medium,
    color: colors.blackColor,
    fontFamily: fonts.Regular,
    lineHeight:22
  },
  rowtitletextStyleSmall:{
    fontSize:sizes.small,
    fontFamily:fonts.Regular,
    color:colors.mediumGray,
    lineHeight:20
  },
  Continewbutton: {
    marginBottom:24,
    marginTop:24,
    marginLeft:24,
    marginRight:24,
    height: 45,
    borderRadius: 15,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor: colors.blue,
  },
  buttontext: {
    color: colors.white,
    fontSize: sizes.small,
   fontFamily:fonts.Medium
  },

});
