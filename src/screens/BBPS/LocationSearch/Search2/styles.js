import { StyleSheet } from 'react-native';
import { colors, sizes, fonts } from '../../../../utils/theme';

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
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    borderRadius: 8,
    paddingRight:8,
    paddingLeft:8,
    borderColor: colors.mediumGray,
    borderWidth:0.5, 
   },
  textInput: {
    fontSize: sizes.mediumLarge,
    color: colors.black,
    fontFamily: fonts.Regular,
    height:50,
    
  },
  buttontext: {
    color: colors.white,
    fontSize: sizes.small,
   fontFamily:fonts.Medium
  },
  searchImg:{
    marginLeft: 8,
    marginRight: 8,
    height: 20,
    width: 20,
    tintColor: colors.blackColor,
    resizeMode: "contain",
   },
  locationImg: {
    height: 20,
    width: 20,
    tintColor: colors.blue,
    resizeMode: "contain",
    marginLeft: 16,
    marginRight: 16,
    
  },
  closeImg:{
    height: 15,
    width: 15,
    tintColor: colors.blackColor,
    resizeMode: "contain",

  },
  textStyle: {
    marginLeft: 16,
    marginRight: 16,
    fontSize: sizes.small,
    color: colors.mediumGray,
    fontFamily: fonts.Regular,
    alignSelf: "center"
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
    paddingTop:20,
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  titletextStyleSemiBold: {
    fontSize: sizes.small,
    color: colors.blue,
    fontFamily: fonts.SemiBold,
    lineHeight:20,
  },
  LocationImg:{
    height:73,
    width:73,
    tintColor: colors.blackColor,
    resizeMode:"contain",
    alignSelf:"center",
    marginTop:60,
    marginBottom:16,
    marginRight:40,
    marginLeft:40

  },
  titletextStyle:{
    fontSize:sizes.medium,
    alignSelf:"center",
    color:colors.mediumGray,
    fontFamily:fonts.Medium,
   
  }
});
