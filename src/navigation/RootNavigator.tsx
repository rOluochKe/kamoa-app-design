import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StepOne, StepTwo } from '../screens';
import { withPadding } from '../components';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StepOne"
      >
        <Stack.Screen
          name="StepOne"
          component={withPadding(StepOne)}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StepTwo"
          component={withPadding(StepTwo)}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
