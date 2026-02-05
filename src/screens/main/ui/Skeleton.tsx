import React, { useCallback } from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Skeleton = () => {
  const { width, height } = useWindowDimensions();
  const { left, right } = useSafeAreaInsets();
  const size = useCallback(() => {
    return (width - 32 - left - right) / 2 - 8;
  }, [left, right, width]);

  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {Array.from(Array(8).keys()).map(i => (
        <Rect
          key={`skeleton_${i}`}
          x={left + 16 + (i % 2 === 0 ? 0 : size() + 8)}
          y={256 * Math.floor(i / 2) + 16}
          width={size()}
          height={240}
          rx={24}
          ry={24}
        />
      ))}
    </ContentLoader>
  );
};
