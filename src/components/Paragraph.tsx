import React from 'react';
import {Text, TextStyle} from 'react-native';

interface ParagraphProps {
  fontSize?: number;
  color?: string;
  fontFamily?: string;
  fontWeight?: '200' | '300' | '400' | '500';
  lineHeight?: number;
  underline?: boolean;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({
  fontSize,
  color,
  fontFamily,
  fontWeight,
  lineHeight,
  underline,
  children,
}) => {
  const textStyle: TextStyle = {
    fontSize: fontSize,
    color: color,
    fontFamily: fontFamily ?? undefined,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    textDecorationLine: underline ? 'underline' : 'none',
  };

  return <Text style={textStyle}>{children}</Text>;
};

export default Paragraph;
