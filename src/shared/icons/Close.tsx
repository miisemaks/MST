import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from 'shared/styles/colors';
import { IconProps } from 'shared/types/IconProps';

export const Close = ({ size = 24, color = 'textPrimary' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9399 12.0006L4.99878 17.9417L6.05944 19.0024L12.0005 13.0612L17.9416 19.0024L19.0022 17.9417L13.0612 12.0006L19.0022 6.0595L17.9416 4.99884L12.0005 10.9399L6.05946 4.99884L4.9988 6.0595L10.9399 12.0006Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
