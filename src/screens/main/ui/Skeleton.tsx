import React, { useCallback } from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useWindowDimensions } from 'react-native';

export const Skeleton = () => {
  const { width, height } = useWindowDimensions();
  const size = useCallback(() => {
    return (width - 32) / 2 - 8;
  }, [width]);

  return (
    <ContentLoader
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      {Array.from(Array(8).keys()).map(i => (
        <Rect
          key={`skeleton_${i}`}
          x={16 + (i % 2 === 0 ? 0 : size() + 8)}
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
