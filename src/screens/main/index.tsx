import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Main = () => {
  return (
    <View style={styles.root}>
      <Text>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
