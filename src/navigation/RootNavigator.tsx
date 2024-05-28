import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StepOne, StepTwo, StepThree, StepFour} from '../screens';
import {withPadding} from '../components';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StepOne"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StepOne" component={withPadding(StepOne)} />
        <Stack.Screen name="StepTwo" component={withPadding(StepTwo)} />
        <Stack.Screen name="StepThree" component={withPadding(StepThree)} />
        <Stack.Screen name="StepFour" component={withPadding(StepFour)} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
