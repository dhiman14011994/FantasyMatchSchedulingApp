import {TouchableOpacity, View, ViewStyle, TextInput} from 'react-native';
import React, {FC} from 'react';
import CONSTANTS from '../../utils/constants';
import styles from './styles';
import CLabel from '../CLabel';
// props of inputs define here
interface CInputProps {
  label?: string;
  labelFontSize?: number;
  backgroundColor?: string;
  customStyle?: ViewStyle;
  labelStyle?: ViewStyle;
  onRightIconPress?: () => void;
  leftIcon?: any;
  rightIcon?: any;
  inputStyle?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  focus?: boolean;
  input?: string;
  setInput?: (input: string) => void;
  setfocus?: (focus: boolean) => void;
  keyboardType?: any;
  secureTextEntry?: boolean;
  autoCapitalize?: string;
  labelColor?: string;
  labelFontWeight?: any;
  inputContainer?: ViewStyle;
  editable?: boolean;
  maxLength?: number;
}


// return the component
const CInput: FC<CInputProps> = ({
  label,
  labelFontSize = CONSTANTS.THEME.size.s14,
  customStyle = {},
  labelStyle = {},
  onRightIconPress,
  leftIcon,
  rightIcon,
  inputStyle,
  placeholder,
  placeholderTextColor,
  focus,
  input,
  setInput = () => {},
  setfocus = () => {},
  keyboardType,
  secureTextEntry,
  autoCapitalize,
  labelColor = CONSTANTS.THEME.colors.BLACK,
  labelFontWeight = '600',
  inputContainer,
  editable,
  maxLength,
}) => {
  return (
    <View
      style={[
        styles.mainContainer,
        {
          ...customStyle,
        },
      ]}>
      {/* Title */}
      {label && (
        <CLabel
          text={label}
          fontSize={labelFontSize}
          color={labelColor}
          fontWeight={labelFontWeight}
          customStyle={{...styles.textStyle, ...labelStyle}}
        />
      )}

      {/* Input */}
      <View
        style={{
          ...styles.inputContainer,
          ...inputContainer,
        }}>
        {leftIcon && <View style={styles.actionIcon}>{leftIcon}</View>}
        <TextInput
          placeholder={focus ? '' : placeholder}
          placeholderTextColor={placeholderTextColor}
          value={input}
          style={[
            styles.inputStyle,
            inputStyle,
            {
              width: leftIcon
                ? rightIcon
                  ? '80%'
                  : '90%'
                : rightIcon
                ? '90%'
                : '100%',
            },
          ]}
          onChangeText={em => setInput(em)}
          onFocus={() => {
            setfocus(true);
          }}
          keyboardType={keyboardType || 'default'}
          onBlur={() => setfocus(false)}
          blurOnSubmit
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize == 'none' ? 'none' : 'words'}
          editable={editable}
          maxLength={maxLength || 10000000000}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            activeOpacity={0.8}
            style={styles.actionIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CInput;
