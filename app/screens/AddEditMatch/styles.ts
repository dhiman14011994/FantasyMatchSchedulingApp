import {StyleSheet} from 'react-native';
import CONSTANTS from '../../utils/constants';

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
  textStyle: {
    paddingVertical: CONSTANTS.THEME.size.WIDTH * 0.01,
  },
  inputContainer: {
    marginVertical: CONSTANTS.THEME.size.WIDTH * 0.0001,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: CONSTANTS.THEME.size.s8,
    borderWidth: 1,
    borderColor: CONSTANTS.THEME.colors.LIGHT_WHITE,
    backgroundColor: CONSTANTS.THEME.colors.WHITE,
  },
  inputStyle: {
    borderRadius: CONSTANTS.THEME.size.s8,
    paddingHorizontal: CONSTANTS.THEME.size.s8,
    height: CONSTANTS.THEME.size.s50,
    color: CONSTANTS.THEME.colors.Dark_Gunmetal,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

});
export default styles;
