import React from 'react';
import {
  StyleSheet,
  View,
  Alert
} from 'react-native';
import CustomImage from './CustomImage';
import Button from './Button';
import Paragraph from './Paragraph';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

interface UploadDocumentProps {
  label: string;
  description: string;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({
  label,
  description,
}) => {

  const handlePress = () => {
    Alert.alert('Select document to upload')
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomImage
          source={require('../assets/document-upload.png')}
          height={30}
          width={30}
          resizeMode={'center'}
        />
      </View>
      <View>
        <Paragraph
          fontSize={14}
          color={colors.lightBlack}
          fontFamily={fonts.bold}
          fontWeight='400'
          lineHeight={14}
        >
          {label}
        </Paragraph>
      </View>

      <View>
        <Paragraph
          fontSize={12}
          color={colors.lightBlack}
          fontFamily={fonts.light}
          fontWeight='400'
          lineHeight={14}
        >
          {description}
        </Paragraph>
      </View>

      <View>
        <Button
          color={'white'}
          background={colors.orange}
          borderRadius={5}
          width={64}
          height={35}
          padding={5}
          onPress={handlePress}
        >
          Select
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
});

export default UploadDocument;
