import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  DimensionValue,
} from 'react-native';

interface ButtonProps {
  color?: string;
  background?: string;
  borderRadius?: number;
  width?: DimensionValue | undefined;
  height?: number;
  padding?: number;
  onPress?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  color,
  background,
  borderRadius,
  width,
  height,
  padding,
  onPress,
  children,
}) => {
  const buttonStyle: ViewStyle = {
    backgroundColor: background,
    borderRadius: borderRadius,
    width: width,
    height: height,
    padding: padding,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle: TextStyle = {
    color: color,
  };

  return (
    <TouchableOpacity
      style={[styles.buttonContainer, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 700,
  },
});

export default Button;
