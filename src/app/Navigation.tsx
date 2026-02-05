import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from 'shared/types/Navigation';
import { Onboarding } from 'screens/onboarding';
import { Subscription } from 'screens/subscription/subscription';
import { colors } from 'shared/styles/colors';
import { useNavigationStore } from 'shared/store/navigation';
import { SubscriptionFill } from 'screens/subscription/subscriptionFill';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'shared/icons/ArrowLeft';
import { VerifySubscribe } from 'screens/subscription/verifySubscribe';
import { TabMain } from './TabMain';

const Stack = createNativeStackNavigator<StackParams>();

export const Navigation = () => {
  const { initialScreen } = useNavigationStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          contentStyle: {
            backgroundColor: colors.bgSecondary,
          },
          headerLeft: () =>
            navigation.canGoBack() ? (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft />
              </TouchableOpacity>
            ) : null,
          headerTitleAlign: 'center',
        })}
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
            <Stack.Screen
              name="Subscription"
              component={Subscription}
              options={{
                title: 'Подписка',
              }}
            />
            <Stack.Screen
              name="SubscriptionFill"
              component={SubscriptionFill}
              options={{
                title: 'Подписка',
              }}
            />
            <Stack.Screen
              name="VerifySubscribe"
              component={VerifySubscribe}
              options={{
                title: 'Подтверждение подписки',
              }}
            />
            <Stack.Screen
              name="Main"
              component={TabMain}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
