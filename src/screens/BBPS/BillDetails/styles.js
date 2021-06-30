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
  textInputView: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
    height:50
  },
  mobileText: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    fontSize: sizes.small,
    color: colors.mediumGray,
    fontFamily: fonts.SemiBold,
    lineHeight:20
  },
  mobiletext: {
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    fontSize: sizes.small,
    color: colors.mediumGray,
    fontFamily: fonts.Regular,
    lineHeight:20
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
    height:50,
    borderWidth:0.5,
    borderRadius:10   
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
    backgroundColor: colors.blue,
    marginBottom: 145
  },
  buttonText: {
    color: colors.white,
    fontSize: sizes.small,
    fontFamily: fonts.Medium
  },
  mobile:{
    color:colors.blue,
    fontSize: sizes.small,
    fontFamily: fonts.Medium
  },
  
});
