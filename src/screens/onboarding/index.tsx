import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';

export const Onboarding = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingTop: top, paddingBottom: bottom }]}>
      <Text>Onboarding</Text>
      <Button
        title="Test"
        containerStyle={{ marginHorizontal: 16 }}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
