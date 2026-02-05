import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigationStore } from 'shared/store/navigation';
import { StackScreenProps } from 'shared/types/Navigation';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';

type Props = StackScreenProps<'VerifySubscribe'>;

export const VerifySubscribe = (props: Props) => {
  const { navigation } = props;
  const { setInitialScreen } = useNavigationStore();

  const { bottom } = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <View style={styles.view}>
        <Text>Здесь будет окно с подтверждением по смс и т п</Text>
      </View>

      <Button
        containerStyle={{ marginHorizontal: 16, marginBottom: bottom }}
        title="Продолжить"
        onPress={() => {
          setInitialScreen('Main');
          navigation.popToTop();
          navigation.replace('Main');
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
  view: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
