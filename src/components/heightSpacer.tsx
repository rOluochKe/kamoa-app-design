import React from 'react';
import {
  View,
  ViewStyle
} from 'react-native';

interface HeightSpacerProps {
  height?: number;
}

const HeightSpacer: React.FC<HeightSpacerProps> = ({ height = 10 }) => {
  const containerStyle: ViewStyle = {
    marginBottom: height,
  };

  return <View style={containerStyle} />;
};

export default HeightSpacer;
