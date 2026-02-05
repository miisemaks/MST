import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from 'shared/types/Navigation';
import { Onboarding } from 'screens/onboarding';
import { Subscription } from 'screens/subscription/subscription';
import { Main } from 'screens/main';

const Stack = createNativeStackNavigator<StackParams>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Subscription" component={Subscription} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
