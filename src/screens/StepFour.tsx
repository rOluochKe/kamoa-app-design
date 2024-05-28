import React from 'react';
import { View } from 'react-native';
import commonStyles from './common.styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Logo, Heading, CustomImage, Paragraph, Button } from '../components';
import { colors } from '../utils/colors';
import { RootStackParamList } from '../utils/type';

const StepFour: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('StepOne');
  };

  return (
    <View>
      <View style={commonStyles.logo}>
        <Logo />
      </View>

      <View style={commonStyles.heading}>
        <Heading
          fontFamily="BarlowCondensed-Bold"
          fontWeight="bold"
          fontSize={24}
          lineHeight={32}
          textAlign="center"
          color={colors.black}
        >
          Message
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
          fontFamily="BarlowCondensed-Regular"
          fontWeight="bold"
          fontSize={18}
          lineHeight={24}
          textAlign="center"
          color={colors.green}
        >
          Success
        </Heading>

        <Paragraph
          fontSize={12}
          color={colors.lightBlack}
          fontFamily="BarlowCondensed-Light"
          fontWeight='500'
          lineHeight={16}
        >
          Thank you, you document was uploaded successfully.
        </Paragraph>
      </View>

      <View style={commonStyles.button}>
        <Button
          color={colors.black}
          background={colors.orange}
          borderRadius={10}
          width={300}
          height={48}
          padding={12}
          onPress={handlePress}
        >
          BACK TO UPLOAD STATEMENT
        </Button>
      </View>

      <View style={commonStyles.backLink}>
        <Paragraph
          fontSize={12}
          color={colors.black}
          fontFamily="BarlowCondensed-Regular"
          fontWeight='400'
          lineHeight={14}
          underline
        >
          Deny Access
        </Paragraph>
      </View>
    </View>
  )
}

export default StepFour
