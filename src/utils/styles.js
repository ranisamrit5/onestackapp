import { StyleSheet } from 'react-native';
import colors from '../globals/colors';
import sizes from '../utils/sizes';
import {fonts} from '../utils/theme';
export default StyleSheet.create({
  centerView:{
    flex: 2,
    marginRight:15,
    marginLeft:15,
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  skipText: {
    marginLeft:20,
    marginRight:20,
    textAlign: 'center',
    fontSize: sizes.medium,
    color: colors.black,
    fontFamily: fonts.SemiBold,
  },
  titleText: {
    marginLeft:0,
    marginRight:20,
    fontSize: sizes.mediumLarge,
    color: colors.black,
    fontFamily: fonts.SemiBold,
  },
  rightView:{
    flexDirection:'row',
    alignSelf:'center',
    alignItems:'center'
   
  },
  backButton: {
    marginLeft: 22,
    marginRight: 10,
    height: 30,
    width: 25,
    alignItems: 'flex-start',
    resizeMode: 'contain',
    
  },
  
});
