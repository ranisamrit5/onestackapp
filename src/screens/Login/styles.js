import { StyleSheet } from 'react-native';
import { colors, fonts, sizes } from '../../utils/theme';


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
  keyBordContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  hedingText: {
    marginTop: 30,
    marginBottom: 30,
    alignSelf: 'center',
    fontSize: sizes.regularLarge,
    color: colors.black,
  },
  
});
