import React from 'react';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  ImageResizeMode,
} from 'react-native';

interface ImageProps extends Omit<RNImageProps, 'resizeMode'> {
  source: any;
  height: number;
  width: number;
  resizeMode: ImageResizeMode;
}

const CustomImage: React.FC<ImageProps> = ({
  source,
  height,
  width,
  resizeMode,
  ...rest
}) => {
  return (
    <RNImage source={source} style={{height, width, resizeMode}} {...rest} />
  );
};

export default CustomImage;
