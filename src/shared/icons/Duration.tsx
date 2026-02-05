import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'shared/styles/colors';
import { IconProps } from 'shared/types/IconProps';

export const Duration = ({ size = 24, color = 'textPrimary' }: IconProps) => {
  return (
    <Svg fill="none" height={size} viewBox="0 0 26 26" width={size}>
      <Path
        d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
        stroke={colors[color]}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <Path
        d="M16.6 14.4H12.2"
        stroke={colors[color]}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <Path
        d="M12 8V14"
        stroke={colors[color]}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </Svg>
  );
};
