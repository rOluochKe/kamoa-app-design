import React from 'react';
import {View} from 'react-native';
import commonStyles from './common.styles';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {
  Logo,
  Heading,
  CustomImage,
  Paragraph,
  HorizontalLine,
  ProgressBar,
  Button,
  HeightSpacer,
} from '../components';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {RootStackParamList} from '../utils/type';

const StepOne: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('StepTwo');
  };

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

      <View style={commonStyles.image}>
        <CustomImage
          source={require('../assets/primer.png')}
          height={135}
          width={203}
          resizeMode={'center'}
        />
      </View>

      <View style={commonStyles.textContainer}>
        <Heading
          fontFamily={fonts.regular}
          fontWeight="bold"
          fontSize={14}
          lineHeight={16}
          textAlign="center"
          color={colors.black}>
          Unlock the power of Kamoa with your M-Pesa
        </Heading>

        <Paragraph
          fontSize={12}
          color={colors.lightBlack}
          fontFamily={fonts.light}
          fontWeight="400"
          lineHeight={14}>
          Get access to the marketplace and help lenders see the real you by
          uploading a six month m-pesa statement
        </Paragraph>

        <HorizontalLine
          border={colors.lineColor}
          alignment="flex-start"
          width={289}
        />
      </View>

      <View style={commonStyles.textContainer}>
        <Heading
          fontFamily={fonts.regular}
          fontWeight="bold"
          fontSize={14}
          lineHeight={16}
          textAlign="center"
          color={colors.black}>
          Get insights on your spending habits
        </Heading>

        <Paragraph
          fontSize={12}
          color={colors.lightBlack}
          fontFamily={fonts.light}
          fontWeight="400"
          lineHeight={14}>
          Kamoa helps you understand your spending and track your finances every
          time you upload a statement
        </Paragraph>

        <HorizontalLine
          border={colors.lineColor}
          alignment="flex-start"
          width={289}
        />
      </View>

      <View style={commonStyles.textContainer}>
        <Heading
          fontFamily={fonts.regular}
          fontWeight="bold"
          fontSize={14}
          lineHeight={16}
          textAlign="center"
          color={colors.black}>
          Secure a higher loan limit
        </Heading>

        <Paragraph
          fontSize={12}
          color={colors.lightBlack}
          fontFamily={fonts.light}
          fontWeight="400"
          lineHeight={14}>
          Users that share more information get access to higher loan limits
          with flexible payments and low interest rates
        </Paragraph>
      </View>

      <View style={commonStyles.progressStatus}>
        <Heading
          fontFamily={fonts.light}
          fontWeight="bold"
          fontSize={12}
          lineHeight={14}
          textAlign="center"
          color={colors.black}>
          Step 1/3
        </Heading>

        <HeightSpacer />

        <ProgressBar
          color="green"
          step={1}
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
          NEXT
        </Button>
      </View>

      <View style={commonStyles.backLink}>
        <Paragraph
          fontSize={12}
          color={colors.black}
          fontFamily={fonts.regular}
          fontWeight="400"
          lineHeight={14}
          underline>
          Back to Login
        </Paragraph>
      </View>
    </View>
  );
};

export default StepOne;
