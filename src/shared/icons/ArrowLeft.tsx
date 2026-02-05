import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from 'shared/styles/colors';
import { IconProps } from 'shared/types/IconProps';

export const ArrowLeft = ({ size = 24, color = 'textPrimary' }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.81731 12.749L11.0289 16.9388L9.97105 18.0022L4.47105 12.5307C4.32955 12.39 4.25 12.1986 4.25 11.999C4.25 11.7994 4.32955 11.6081 4.47105 11.4673L9.97105 5.99585L11.0289 7.05926L6.81737 11.249L20 11.249L20 12.749L6.81731 12.749Z"
        fill={colors[color]}
      />
    </Svg>
  );
};
