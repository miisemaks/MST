import React, { memo } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Text } from 'shared/ui/Text';

type Props = {
  title: string;
  description: string;
};

export const Screen = memo((props: Props) => {
  const { title, description } = props;
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.root, { width }]}>
      {/* 
           TODO: Добавить картинки 
        */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    gap: 24,
    justifyContent: 'flex-end',
    paddingBottom: 120,
  },
  title: {
    fontSize: 22,
    fontWeight: 600,
  },
  description: {},
});
