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

const StepThree: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleAccept = () => {
    navigation.navigate('StepFour');
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
          lineHeight={32}
          textAlign="center"
          color={colors.black}>
          Accept permissions
        </Heading>
      </View>

      <View style={commonStyles.image}>
        <CustomImage
          source={require('../assets/accept.png')}
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
          Personal info
        </Heading>

        <Paragraph
          fontSize={12}
          color={colors.lightBlack}
          fontFamily={fonts.light}
          fontWeight="400"
          lineHeight={14}>
          We collect personal info to prevent fraud and also protect you from
          it. ie Phone number, email, name
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
          Approximate location
        </Heading>

        <Paragraph
          fontSize={12}
          color={colors.lightBlack}
          fontFamily={fonts.light}
          fontWeight="400"
          lineHeight={14}>
          We look at the approximate location to help us show you relevant
          information.
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
          App info and performance
        </Heading>

        <Paragraph
          fontSize={12}
          color={colors.lightBlack}
          fontFamily={fonts.light}
          fontWeight="400"
          lineHeight={14}>
          Our app runs in many devices and this help us optimise for every type
          of device.
        </Paragraph>

        <HeightSpacer />

        <Paragraph
          fontSize={12}
          color={colors.black}
          fontFamily={fonts.regular}
          fontWeight="400"
          lineHeight={14}
          underline>
          Get more info from Google Play
        </Paragraph>
      </View>

      <View style={commonStyles.progressStatus}>
        <Heading
          fontFamily={fonts.regular}
          fontWeight="bold"
          fontSize={12}
          lineHeight={14}
          textAlign="center"
          color={colors.black}>
          Step 3/3
        </Heading>

        <HeightSpacer />

        <ProgressBar
          color="green"
          step={3}
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
          onPress={handleAccept}>
          ACCEPT & CONTINUE
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
          Deny Access
        </Paragraph>
      </View>
    </View>
  );
};

export default StepThree;
