import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Onboarding = () => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.root, { paddingTop: top, paddingBottom: bottom }]}>
      <Text>Onboarding</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
