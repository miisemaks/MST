import { SubscriptionCard } from 'features/subscription';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery } from 'shared/api/client';
import { getSubscriptions } from 'shared/api/subscription';
import { colors } from 'shared/styles/colors';
import { StackScreenProps } from 'shared/types/Navigation';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { Skeleton } from './ui/Skeleton';

type Props = StackScreenProps<'Subscription'>;

export const Subscription = (props: Props) => {
  const { navigation } = props;
  const { bottom, left, right } = useSafeAreaInsets();
  const [select, setSelect] = useState<number | null>(null);
  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      return await getSubscriptions();
    },
  });

  return (
    <View
      style={[
        styles.root,
        { paddingBottom: bottom, paddingLeft: left, paddingRight: right },
      ]}
    >
      {isLoading ? (
        <View style={{ flex: 1, paddingTop: 16 }}>
          <Skeleton />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data ?? []}
          keyExtractor={item => `subsc_${item.id}`}
          renderItem={({ item }) => (
            <SubscriptionCard
              title={item.title}
              description={item.description}
              cost={item.cost}
              total={item.total}
              discount={item.discount}
              symbol={item.symbol}
              bg={item.bg}
              colorSelect={item.colorSelect}
              selected={item.id === select}
              onSelect={() => setSelect(item.id)}
            />
          )}
          refreshControl={
            <RefreshControl
              tintColor={colors.accent}
              colors={[colors.accent]}
              refreshing={isRefetching}
              onRefresh={() => refetch()}
            />
          }
          contentContainerStyle={[
            styles.flatContentContainer,
            {
              paddingBottom: bottom + 56,
            },
          ]}
          ListHeaderComponent={
            <Text style={styles.title}>Выберите подписку</Text>
          }
        />
      )}

      <Button
        title="Продолжить"
        disabled={!select}
        onPress={() => {
          navigation.navigate('SubscriptionFill', {
            id: select!,
          });
        }}
        containerStyle={{
          position: 'absolute',
          left: left + 16,
          right: right + 16,
          bottom: bottom + 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
  },
  flatContentContainer: {
    gap: 12,
    padding: 16,
  },
});
