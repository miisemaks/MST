import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { colors } from 'shared/styles/colors';
import { Text } from 'shared/ui/Text';
import { LiquidGlassView } from '@sbaiahmed1/react-native-blur';
import { TrackImage } from './TrackImage';
import { getStringDuration } from 'shared/lib';
import { Duration } from 'shared/icons/Duration';
import { User } from 'shared/icons/User';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
  title: string;
  author: string;
  url: string;
  duration: number;
  isPremium: boolean;
  rating: number;
  genre: string | null;
};

export const TrackCard = memo((props: Props) => {
  const { title, author, url, duration, isPremium, rating } = props;
  const { width } = useWindowDimensions();
  const { left, right } = useSafeAreaInsets();

  const size = useCallback(() => {
    return (width - 32 - left - right) / 2 - 8;
  }, [left, right, width]);

  return (
    <LiquidGlassView
      isInteractive
      glassType="regular"
      style={{
        borderRadius: 16,
      }}
    >
      <TouchableOpacity
        style={[
          styles.root,
          {
            width: size(),
            backgroundColor: isPremium ? colors.gold : colors.bgPrimary,
          },
        ]}
        activeOpacity={0.9}
      >
        <TrackImage url={url} rating={rating} onPressPlus={() => {}} />
        <View style={styles.view}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <View style={{ gap: 4 }}>
            <View style={styles.authorView}>
              <User size={14} color="textSecondary" />
              <Text style={styles.author} numberOfLines={1}>
                {author}
              </Text>
            </View>

            <View style={styles.durationView}>
              <Duration size={14} color="textSecondary" />
              <Text>{getStringDuration(duration)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </LiquidGlassView>
  );
});

const styles = StyleSheet.create({
  root: {
    gap: 8,
    backgroundColor: colors.bgPrimary,
    borderRadius: 12,
    paddingBottom: 8,
    flex: 1,
  },
  view: {
    paddingHorizontal: 12,
    gap: 4,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontWeight: 600,
  },
  author: {
    color: colors.textSecondary,
    fontSize: 12,
  },
  authorView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  durationView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});
