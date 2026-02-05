import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabMainScreenProps } from 'shared/types/Navigation';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';

type Props = TabMainScreenProps<'Profile'>;

export const Profile = (props: Props) => {
  const { navigation } = props;
  const { setItem } = useAsyncStorage('initialRouteName');
  const { left, right } = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.root,
        {
          paddingLeft: left + 16,
          paddingRight: right + 16,
        },
      ]}
    >
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    gap: 16,
  },
});
