// Font Family constants 'TODO custom fonts needs to install'
import { Platform } from 'react-native';
export default {
   
//  Bold : 'OpenSans-Bold',
//  Regular: 'OpenSans-Regular',
//  SemiBold: 'OpenSans-SemiBold',
//  Medium: 'OpenSans-SemiBold',
//  Light:'OpenSans-Light',

 Bold : 'IBMPlexSans-Bold',
 Regular: Platform.OS == 'ios' ? 'IBMPlexSans' : 'IBMPlexSans-Regular',
 SemiBold: 'IBMPlexSans-SemiBold',
 Medium: 'IBMPlexSans-Medium',
 Light:'IBMPlexSans-Light',
 Thin:'IBMPlexSans-Thin',
 ExtraLight:'IBMPlexSans-ExtraLight',

};

