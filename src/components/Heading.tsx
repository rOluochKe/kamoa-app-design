import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';

interface HeadingProps extends TextProps {
  fontFamily?: string;
  fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
  fontSize?: number;
  lineHeight?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
}

const Heading: React.FC<HeadingProps> = ({
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  textAlign,
  color,
  children,
  style,
  ...props
}) => {
  const dynamicStyles = StyleSheet.create({
    heading: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: fontSize,
      lineHeight: lineHeight,
      textAlign: textAlign,
      color: color,
    },
  });

  return (
    <Text style={[dynamicStyles.heading, style]} {...props}>
      {children}
    </Text>
  );
};

export default Heading;
