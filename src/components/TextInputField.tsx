import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Paragraph from './Paragraph';
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

interface TextInputFieldProps {
  label: string;
  placeholder: string;
}

const TextInputField: React.FC<TextInputFieldProps> = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Paragraph
        fontSize={14}
        color={colors.lightBlack}
        fontFamily={fonts.medium}
        fontWeight='400'
        lineHeight={14}
      >
        {label}
      </Paragraph>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lineColor,
  },
  label: {
    marginBottom: 3,
  },
  input: {
    height: 26,
    fontSize: 16,
  },
});

export default TextInputField;
