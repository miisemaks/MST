import React, { useRef, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from 'shared/ui/Button';
import { Screen } from './ui/Screen';
import { StackScreenProps } from 'shared/types/Navigation';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

const data = [
  {
    title: 'Вся музыка мира — у тебя в кармане',
    description:
      'Миллионы треков, подкастов и аудиокниг. Находи свою музыку, создавай плейлисты и открывай новое — без ограничений.',
  },
  {
    title: 'Музыка, которая понимает тебя',
    description:
      'Персональные рекомендации, умные плейлисты под любое настроение и возможность скачивать музыку, чтобы слушать её где угодно.',
  },
];

type Props = StackScreenProps<'Onboarding'>;

export const Onboarding = (props: Props) => {
  const { navigation } = props;
  const { top, bottom } = useSafeAreaInsets();
  const { setItem } = useAsyncStorage('initialRouteName');
  const ref = useRef<FlatList>(null);
  const [screenState, setScreenState] = useState(0);

  return (
    <View style={[styles.root, { paddingTop: top, paddingBottom: bottom }]}>
      <FlatList
        ref={ref}
        data={data}
        pagingEnabled
        scrollEnabled={false}
        keyExtractor={(_, index) => `screen_${index}`}
        horizontal
        renderItem={({ item }) => (
          <Screen title={item.title} description={item.description} />
        )}
      />
      <Button
        title={screenState === 0 ? 'Далее' : 'Продолжить'}
        containerStyle={{ marginHorizontal: 16 }}
        onPress={() => {
          if (screenState !== 0) {
            setItem('Subscription');
            navigation.replace('Subscription');
          } else {
            setScreenState(state => state + 1);
            ref.current?.scrollToIndex({
              index: screenState + 1,
            });
          }
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
