import { TrackCard } from 'features/track';
import React from 'react';
import { View, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { useQuery } from 'shared/api/client';
import { getTrackList } from 'shared/api/track';
import { Skeleton } from './ui/Skeleton';
import { colors } from 'shared/styles/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Main = () => {
  const { isLoading, data, refetch, isRefetching } = useQuery({
    queryKey: ['track_lists'],
    queryFn: async () => await getTrackList(),
  });
  const { left, right } = useSafeAreaInsets();

  return (
    <View style={styles.root}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <FlatList
          data={data ?? []}
          keyExtractor={item => `track_${item.id}`}
          renderItem={({ item }) => (
            <TrackCard
              title={item.title}
              author={item.author}
              url={item.imageUrl}
              duration={item.duration}
              isPremium={item.isPremium}
              rating={item.rating}
              genre={item.genre ?? null}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            gap: 8,
          }}
          contentContainerStyle={{
            padding: 16,
            paddingLeft: left + 16,
            paddingRight: right + 16,
            gap: 8,
          }}
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={() => refetch()}
              tintColor={colors.accent}
              colors={[colors.accent]}
            />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
