import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Skeleton = () => {
  const { width } = useWindowDimensions();
  const { left, right } = useSafeAreaInsets();

  return (
    <ContentLoader
      width={width - 32}
      height={120}
      viewBox={`0 0 ${width - 32} 120`}
    >
      <Rect
        x={0}
        y={0}
        rx={16}
        ry={16}
        width={width - 32 - left - right}
        height={120}
      />
    </ContentLoader>
  );
};

export const SkeletonCards = () => {
  const { width } = useWindowDimensions();
  const { left, right } = useSafeAreaInsets();

  return (
    <ContentLoader
      width={width}
      height={376}
      viewBox={`0 0 ${width - 32 - left - right} 376`}
    >
      <Rect
        x={0}
        y={16}
        rx={16}
        ry={16}
        width={width - 32 - left - right}
        height={120}
      />
      <Rect
        x={0}
        y={152}
        rx={16}
        ry={16}
        width={width - 32 - left - right}
        height={64}
      />
      <Rect
        x={0}
        y={232}
        rx={16}
        ry={16}
        width={width - 32 - left - right}
        height={64}
      />
      <Rect
        x={0}
        y={312}
        rx={16}
        ry={16}
        width={width - 32 - left - right}
        height={64}
      />
    </ContentLoader>
  );
};
