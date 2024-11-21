import {
  ActivityIndicator,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import CONSTANTS from '../../utils/constants';
import styles from './styles';
import CLabel from '../CLabel';
// props of buttons define here
interface CButtonProps {
  text?: string;
  fontSize?: number;
  backgroundColor?: string;
  customStyle?: ViewStyle;
  onHandlePress?: () => void;
  disabled?: boolean;
  color?: string;
  fontWeight?: any;
  isLoading?: boolean;
}



// return the component
const CButton: FC<CButtonProps> = ({
  text,
  backgroundColor = CONSTANTS.THEME.colors.PRIMARY_COLOR,
  fontSize = CONSTANTS.THEME.size.s14,
  color = CONSTANTS.THEME.colors.BLACK,
  customStyle = {},
  onHandlePress,
  disabled = false,
  fontWeight,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onHandlePress}
      activeOpacity={0.8}
      style={[
        styles.mainContainer,
        {
          backgroundColor,
          ...customStyle,
        },
      ]}>

      {isLoading ? (
        <ActivityIndicator
          size={'large'}
          color={CONSTANTS.THEME.colors.PRIMARY_COLOR}
        />
      ) : (
        <CLabel
          text={text}
          fontSize={fontSize}
          customStyle={styles.textStyle}
          fontWeight={fontWeight}
          color={color}
        />
      )}

    </TouchableOpacity>
  );
};

export default CButton;
