import React from 'react';
import ContentLoader from 'react-content-loader/native';
import { useWindowDimensions } from 'react-native';
import { Rect } from 'react-native-svg';

export const Skeleton = () => {
  const { width } = useWindowDimensions();
  return (
    <ContentLoader width={width} height={256} viewBox={`0 0 ${width} 256`}>
      <Rect x={16} y={0} width={width - 32} height={120} rx={16} ry={16} />
      <Rect x={16} y={136} width={width - 32} height={120} rx={16} ry={16} />
    </ContentLoader>
  );
};
