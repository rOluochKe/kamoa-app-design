import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../utils/colors';

interface ProgressBarProps {
  color?: 'green' | 'orange';
  step: number;
  width?: number;
  border?: boolean;
  borderRadius?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  color,
  step,
  width,
  border,
  borderRadius,
}) => {
  const containerStyle: ViewStyle = {
    width: width ?? '100%',
    height: 10,
    backgroundColor: border ? colors.orange : 'transparent',
    borderWidth: border ? 1 : 0,
    borderRadius: borderRadius ?? 0,
    overflow: 'hidden',
  };

  const progressStyle: ViewStyle = {
    width: `${(step / 3) * 100}%`,
    height: '100%',
    backgroundColor: color === 'green' ? colors.green : colors.orange,
  };

  return (
    <View style={[styles.progressBarContainer, containerStyle]}>
      <View style={progressStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ProgressBar;
