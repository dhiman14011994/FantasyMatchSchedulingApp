import {Text, TextStyle} from 'react-native';
import React, {FC} from 'react';
import CONSTANTS from '../../utils/constants';
import styles from './styles';

interface CLabelProps {
  text?: string;
  fontSize?: number;
  fontWeight?: string;
  fontFamily?: string;
  color?: string;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  customStyle?: TextStyle;
  numberOfLines?: number;
  onPress?: () => void;
}

const CLabel: FC<CLabelProps> = ({
  text,
  fontSize = CONSTANTS.THEME.size.s14,
  fontWeight = CONSTANTS.THEME.typography.fontWeights.medium,
  color = CONSTANTS.THEME.colors.BLACK,
  textAlign = 'left',
  customStyle = {},
  numberOfLines,
  onPress,
}) => {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      lineBreakMode="tail"
      //@ts-ignore
      style={{
        ...styles.label,
        color,
        fontSize,
        textAlign,
        fontWeight,
        ...customStyle,
      }}>
      {text}
    </Text>
  );
};

export default CLabel;
