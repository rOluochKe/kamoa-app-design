import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import commonStyles from './common.styles';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {
  Logo,
  Heading,
  UploadDocument,
  Paragraph,
  TextInputField,
  ProgressBar,
  Button,
  HeightSpacer,
} from '../components';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {RootStackParamList} from '../utils/type';

const StepTwo: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('StepThree');
  };

  const stepsToFollow = [
    {
      id: 1,
      option: 'Dial *334#',
    },
    {
      id: 2,
      option: 'Select 7 - My Account',
    },
    {
      id: 3,
      option: 'Select 3 - M-PESA Statement',
    },
    {
      id: 4,
      option: 'Select 1 - M-PESA Statement',
    },
    {
      id: 5,
      option: 'Select 1 - Request Statement',
    },
    {
      id: 6,
      option: 'Select 1 - Full Statement',
    },
    {
      id: 7,
      option: 'Select 4 - 6 Months Statement',
    },
    {
      id: 8,
      option: 'Select 1 - Enter e-mail address',
    },
    {
      id: 9,
      option: 'Enter your M-PESA Pin to receive your statement',
    },
  ];

  const renderItem = ({item}: {item: {id: number; option: string}}) => (
    <Paragraph
      fontSize={14}
      color={colors.lightBlack}
      fontFamily={fonts.medium}
      fontWeight="400"
      lineHeight={18}>
      {item.option}
    </Paragraph>
  );

  return (
    <View>
      <View style={commonStyles.logo}>
        <Logo />
      </View>

      <View style={commonStyles.heading}>
        <Heading
          fontFamily={fonts.bold}
          fontWeight="bold"
          fontSize={24}
          lineHeight={28}
          textAlign="center"
          color={colors.black}>
          Upload a 6 month M-Pesa Statement
        </Heading>
      </View>

      <View style={styles.promptContainer}>
        <View style={styles.steps}>
          <FlatList
            data={stepsToFollow}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        <View style={styles.uploadDoc}>
          <UploadDocument
            label="Upload M-Pesa Statement"
            description="select the M-Pesa statement from your phone."
          />
        </View>

        <View>
          <TextInputField
            label="Enter the code you received"
            placeholder="243456"
          />
        </View>
      </View>

      <View style={commonStyles.progressStatus}>
        <Heading
          fontFamily={fonts.regular}
          fontWeight="bold"
          fontSize={12}
          lineHeight={14}
          textAlign="center"
          color={colors.black}>
          Step 2/3
        </Heading>

        <HeightSpacer />

        <ProgressBar
          color="green"
          step={2}
          width={100}
          border
          borderRadius={10}
        />
      </View>

      <View style={commonStyles.button}>
        <Button
          color={colors.black}
          background={colors.orange}
          borderRadius={10}
          width={300}
          height={48}
          padding={12}
          onPress={handlePress}>
          UPLOAD M-PESA STATEMENT
        </Button>
      </View>

      <View style={commonStyles.backLink}>
        <Paragraph
          fontSize={12}
          color={colors.black}
          fontFamily={fonts.medium}
          fontWeight="400"
          lineHeight={14}
          underline>
          Back to Login
        </Paragraph>
      </View>
    </View>
  );
};

export default StepTwo;

const styles = StyleSheet.create({
  promptContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  steps: {
    marginBottom: 10,
  },
  uploadDoc: {
    borderRadius: 15,
    borderBlockColor: colors.lineColor,
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
  },
});
