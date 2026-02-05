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
import { Skeleton } from './ui/Skeleton';
import { useForm } from 'react-hook-form';
import { useBankCardStore } from 'shared/store/card';
import { BankCardType } from 'shared/types/BankCard';
import { Button } from 'shared/ui/Button';

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
  const { data: dataCards } = useQuery({
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

  return (
    <View style={styles.root}>
      {isLoading ? (
        <Skeleton />
      ) : data ? (
        <View style={{ paddingHorizontal: 16 }}>
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
        </View>
      ) : null}
      <TouchableOpacity onPress={() => setValue('newCard', true)}>
        <Text style={{ color: colors.accent, fontWeight: 500, marginLeft: 16 }}>
          Добавить карту
        </Text>
      </TouchableOpacity>
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
              console.log(item.id);
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
        contentContainerStyle={{ flex: 1, paddingHorizontal: 16 }}
      />
      <Button
        title="Продолжить"
        disabled={!selectCard}
        onPress={() => {
          navigation.navigate('VerifySubscribe');
        }}
        containerStyle={{ marginHorizontal: 16, marginBottom: 16 }}
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
    paddingVertical: 16,
    gap: 16,
  },
  newCardView: {
    gap: 8,
  },
  newCardDateCVV: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
