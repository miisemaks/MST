import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from 'shared/types/Navigation';
import { Onboarding } from 'screens/onboarding';
import { Subscription } from 'screens/subscription/subscription';
import { Main } from 'screens/main';
import { colors } from 'shared/styles/colors';
import { useNavigationStore } from 'shared/store/navigation';

const Stack = createNativeStackNavigator<StackParams>();

export const Navigation = () => {
  const { initialScreen } = useNavigationStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: colors.bgSecondary,
          },
        }}
      >
        {/* TODO: продумать логику отображения без переходов в первые секунды. Оставил на потом чтобы не тратить время */}
        {initialScreen === 'Onboarding' ? (
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen name="Subscription" component={Subscription} />
            <Stack.Screen name="Main" component={Main} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
