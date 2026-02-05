import {
  BankCard,
  ModalNewCard,
  SubscriptionCard,
} from 'features/subscription';
import React from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { invalidateQueries, useQuery } from 'shared/api/client';
import { getSubscription } from 'shared/api/subscription';
import { colors } from 'shared/styles/colors';
import { StackScreenProps } from 'shared/types/Navigation';
import { Text } from 'shared/ui/Text';
import { Skeleton, SkeletonCards } from './ui/Skeleton';
import { useForm } from 'react-hook-form';
import { useBankCardStore } from 'shared/store/card';
import { BankCardType } from 'shared/types/BankCard';
import { Button } from 'shared/ui/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = StackScreenProps<'SubscriptionFill'>;

export const SubscriptionFill = (props: Props) => {
  const { route, navigation } = props;
  const { data, isLoading, isRefetching, refetch } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      return await getSubscription({
        id: route.params.id,
      });
    },
  });
  const { cards, removeCard } = useBankCardStore();
  const { data: dataCards, isLoading: isLoadingCards } = useQuery({
    queryKey: ['mycards'],
    queryFn: async () => {
      return new Promise<BankCardType[]>(resolve => {
        setTimeout(() => {
          resolve(cards);
        }, 1500);
      });
    },
  });
  const { watch, setValue } = useForm<{
    newCard: boolean;
    selectCard: number | null;
  }>({
    defaultValues: {
      newCard: false,
      selectCard: null,
    },
  });
  const { newCard, selectCard } = watch();
  const { left, right, bottom } = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      <View style={{ flex: 1, gap: 16 }}>
        {isLoadingCards ? (
          <SkeletonCards />
        ) : (
          <FlatList
            data={dataCards ?? []}
            style={{ flex: 1 }}
            keyExtractor={item => `bank_cards_${item.id}`}
            renderItem={({ item }) => (
              <BankCard
                last_4_digits={item.cardNumber.substring(
                  item.cardNumber.length - 5,
                )}
                selected={selectCard === item.id}
                onPressDelete={() => {
                  removeCard(item.id);
                  invalidateQueries({
                    queryKeys: ['mycards'],
                  });
                }}
                onPress={() => {
                  setValue('selectCard', item.id);
                }}
              />
            )}
            refreshControl={
              <RefreshControl
                refreshing={isRefetching}
                onRefresh={() => refetch()}
                tintColor={colors.accent}
                colors={[colors.accent]}
              />
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              gap: 12,
              paddingTop: 16,
              paddingLeft: left + 16,
              paddingRight: right + 16,
              paddingBottom: bottom + 72,
            }}
            ListHeaderComponent={
              <View style={{ gap: 16 }}>
                {isLoading ? (
                  <Skeleton />
                ) : data ? (
                  <SubscriptionCard
                    title={data?.title}
                    description={data.description}
                    bg={data.bg}
                    colorSelect={data.colorSelect}
                    cost={data.cost}
                    discount={data.discount}
                    symbol={data.symbol}
                    total={data.total}
                    selected={true}
                    onSelect={() => {}}
                  />
                ) : null}
                <TouchableOpacity
                  style={[styles.touchCreate]}
                  onPress={() => setValue('newCard', true)}
                >
                  <Text style={{ color: colors.accent, fontWeight: 500 }}>
                    Добавить карту
                  </Text>
                </TouchableOpacity>
              </View>
            }
          />
        )}
      </View>

      <Button
        title="Продолжить"
        disabled={!selectCard}
        onPress={() => {
          navigation.navigate('VerifySubscribe');
        }}
        containerStyle={{
          ...styles.btnNext,
          bottom: bottom + 16,
          left: left + 16,
          right: right + 16,
        }}
      />
      <ModalNewCard
        visible={newCard}
        onClose={() => setValue('newCard', false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  newCardView: {
    gap: 8,
  },
  newCardDateCVV: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  touchCreate: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  btnNext: {
    position: 'absolute',
  },
});
