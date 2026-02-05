import BlurView from '@sbaiahmed1/react-native-blur';
import React, { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Melody } from 'shared/icons/Melody';
import { Plus } from 'shared/icons/Plus';
import { RatingFill } from 'shared/icons/RatingFill';
import { colors } from 'shared/styles/colors';
import { Text } from 'shared/ui/Text';
import ContentLoader, { Rect } from 'react-content-loader/native';

type Props = {
  url: string | null;
  rating: number;
  onPressPlus: () => void;
};

export const TrackImage = memo((props: Props) => {
  const { url, rating, onPressPlus } = props;
  const { width } = useWindowDimensions();
  const { watch, setValue } = useForm<{
    error: boolean;
    loading: boolean;
  }>({
    defaultValues: {
      error: false,
      loading: false,
    },
  });
  const { error, loading } = watch();
  const size = useCallback(() => {
    return (width - 32) / 2 - 8;
  }, [width]);

  return (
    <ImageBackground
      source={{ uri: url ?? undefined }}
      style={{
        width: size(),
        height: size(),
        backgroundColor: colors.border,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        position: 'relative',
      }}
      imageStyle={{
        width: size(),
        height: size(),
      }}
      onLoadStart={() => {
        setValue('loading', true);
        setValue('error', false);
      }}
      onLoadEnd={() => setValue('loading', false)}
      onError={() => setValue('error', true)}
    >
      {loading ? (
        <ContentLoader
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          style={styles.loadingView}
        >
          <Rect width="100" height="100" x={0} y={0} />
        </ContentLoader>
      ) : error ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Melody color="textSecondary" />
        </View>
      ) : null}

      <BlurView
        blurType="light"
        blurAmount={10}
        style={styles.ratingView}
        overlayColor={colors.bgPrimary + '66'}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <RatingFill size={14} color="gold" />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </BlurView>
      <TouchableOpacity style={styles.touchPlus} onPress={onPressPlus}>
        <BlurView blurType="light" blurAmount={10} style={styles.blurPlus}>
          <Plus color="accent" />
        </BlurView>
      </TouchableOpacity>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  touchPlus: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: colors.bgPrimary + '66',
    borderBottomLeftRadius: 24,
  },
  blurPlus: {
    padding: 6,
    paddingRight: 4,
    paddingTop: 4,
    borderBottomLeftRadius: 16,
    backgroundColor: colors.bgPrimary + '66',
  },
  ratingView: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    padding: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rating: {
    fontSize: 12,
    fontWeight: 600,
  },
  loadingView: {
    backgroundColor: 'red',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
