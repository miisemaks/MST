import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React from 'react';
import { View } from 'react-native';
import { TabMainScreenProps } from 'shared/types/Navigation';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';

type Props = TabMainScreenProps<'Profile'>;

export const Profile = (props: Props) => {
  const { navigation } = props;
  const { setItem } = useAsyncStorage('initialRouteName');

  return (
    <View>
      <Text>Profile</Text>
      <Button
        title="на Onboarding"
        onPress={() => {
          setItem('Onboarding');
          navigation.replace('Onboarding');
        }}
      />
    </View>
  );
};
