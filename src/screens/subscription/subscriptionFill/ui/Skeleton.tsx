import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { useWindowDimensions } from 'react-native';

export const Skeleton = () => {
  const { width } = useWindowDimensions();

  return (
    <ContentLoader
      width={width - 32}
      height={120}
      viewBox={`0 0 ${width - 32} 120`}
    >
      <Rect x={0} y={0} rx={16} ry={16} width={width - 32} height={120} />
    </ContentLoader>
  );
};
