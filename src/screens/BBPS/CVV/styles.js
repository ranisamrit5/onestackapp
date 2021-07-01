import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '../../../utils/theme';
import { Dimensions } from 'react-native'
let deviceWidth = Dimensions.get('window').width
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
  rowbox: {
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    paddingTop: 16,
    },
    rowradioButton:{
      flexDirection:"row",
      marginLeft: 5,
      marginRight: 16,
      marginTop: 16,
      paddingTop: 16,
      maxWidth: deviceWidth - 50
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
    marginLeft: 16,
    marginRight: 16,
   },
  titletextStyleSemiBold: {
    fontSize: sizes.medium,
    color: colors.blackColor,
    fontFamily: fonts.SemiBold,
  },
  rowtitletextMediumLargeStyle:{
  fontSize:sizes.mediumLarge,
  color:colors.blackColor,
  fontFamily: fonts.SemiBold,
  },
  titletextStyleSmall:{
    fontSize:sizes.small,
    color:colors.mediumGray,
    lineHeight:20,
    fontFamily:fonts.SemiBold,
    
  },
  titletextStylesmall:{
    fontSize:sizes.small,
    color:colors.blue,
    lineHeight:20,
    fontFamily:fonts.SemiBold
  },
  viewAlltextStyleSemiBold: {
    fontSize: sizes.small,
    color: colors.primaryColor,
    fontFamily: fonts.SemiBold,
  },
  borderbox: {
     
    marginLeft: 10,
    marginRight: 16,
    marginTop: 16,
    marginBottom: 16,

  },
  rowImageStyle: {
    width: 40,
    height:40,
    // borderRadius: 10,
    backgroundColor:colors.fair
  },
  rowtitletextStyle: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: sizes.medium,
    color: colors.black,
    fontFamily: fonts.Regular,
    
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
  rowtitletextMediumStyleBlack: {
    marginRight: 40,
    fontSize: sizes.medium,
    color: colors.black,
    fontFamily: fonts.Medium
  },
  columbox:{
   marginLeft: 10,
   marginRight: 10,

  },
  checkImage: {
    height: 30,
    width: 30,
    marginLeft: 16,
    alignSelf:"center",
    resizeMode: 'contain'
  },
  Image:{
    height:20,
    width:20,
    marginLeft: 16,
    marginRight:16,
    alignSelf:"flex-end"
  },
  buttonKey: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: colors.fair,
    elevation: 3,

  },
  Smallbutton: {
    width: '40%',
    borderWidth: 0.5,
    height: 45,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.gray,
  },
  Continewbutton: {
    width: '55%',
    height: 45,
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  buttontext: {
    color: colors.white,
    fontSize: sizes.small,
   fontFamily:fonts.Medium
  },
  main1: {
    flexDirection: "row",
    maxWidth: deviceWidth - 50
  },
  mainView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "center",
    marginLeft: 10

  },
  smallrowtitletextStyle:{
    fontSize:sizes.small,
    color:colors.gray,
    marginLeft: 16,
    marginRight: 16,
    fontFamily:fonts.Regular,
    lineHeight:20
  }
});
