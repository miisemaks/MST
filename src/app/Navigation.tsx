import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from 'shared/types/Navigation';
import { Onboarding } from 'screens/onboarding';
import { Subscription } from 'screens/subscription/subscription';
import { colors } from 'shared/styles/colors';
import { SubscriptionFill } from 'screens/subscription/subscriptionFill';
import { TouchableOpacity } from 'react-native';
import { ArrowLeft } from 'shared/icons/ArrowLeft';
import { VerifySubscribe } from 'screens/subscription/verifySubscribe';
import { TabMain } from './TabMain';
import { hide } from 'react-native-bootsplash';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useForm } from 'react-hook-form';

const Stack = createNativeStackNavigator<StackParams>();

export const Navigation = () => {
  const { getItem } = useAsyncStorage('initialRouteName');
  const { watch, setValue } = useForm<{
    initialScreen: keyof StackParams;
    isDataReady: boolean;
  }>({
    defaultValues: {
      initialScreen: 'Onboarding',
      isDataReady: false,
    },
  });
  const { initialScreen, isDataReady } = watch();

  useEffect(() => {
    const getData = async () => {
      const data = await getItem();

      setValue('initialScreen', (data ?? 'Onboarding') as keyof StackParams);
      setValue('isDataReady', true);
    };
    getData();
  }, [getItem, setValue]);

  if (!isDataReady) {
    return null;
  }

  return (
    <NavigationContainer
      onReady={() => {
        hide();
        // setTimeout(() => {

        // }, 1000);
      }}
    >
      <Stack.Navigator
        initialRouteName={initialScreen}
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
        <Stack.Screen
          name="Main"
          component={TabMain}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Group>
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
        </Stack.Group>
        {/* TODO: продумать логику отображения без переходов в первые секунды. Оставил на потом чтобы не тратить время */}
        {/* {initialScreen === 'Onboarding' ? ( */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
