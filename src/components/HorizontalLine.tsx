import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface HorizontalLineProps {
  border?: string;
  alignment?: 'center' | 'flex-start' | 'flex-end';
  width?: number;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ border, alignment, width }) => {
  const lineStyle: ViewStyle = {
    borderBottomColor: border,
    borderBottomWidth: 1,
    alignSelf: alignment,
    width: width,
  };

  return <View style={[styles.horizontalLine, lineStyle]} />;
};

const styles = StyleSheet.create({
  horizontalLine: {
    marginVertical: 10,
  },
});

export default HorizontalLine;
