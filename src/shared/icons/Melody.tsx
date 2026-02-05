import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'shared/styles/colors';
import { IconProps } from 'shared/types/IconProps';

export const Melody = ({ size = 24, color = 'textPrimary' }: IconProps) => {
  return (
    <Svg
      id="Capa_1"
      x="0px"
      y="0px"
      width={size}
      height={size}
      viewBox="0 0 21.42 21.42"
    >
      <G>
        <G>
          <Path
            fill={colors[color]}
            d="M20.185,10.421V6.547V3.524V3.021L6.659,0l-0.04,10.804c-5.818,0.003-6.928,5.545-3.298,7.307
			c2.383,1.156,6.021-0.447,6.021-3.764V8.268v-5.02l8.225,1.667l-0.036,8.675c-5.818,0.003-6.928,5.694-3.298,7.456
			c2.383,1.156,5.95-0.445,5.95-3.762v-6.077v-0.786L20.185,10.421L20.185,10.421z"
          />
        </G>
      </G>
    </Svg>
  );
};
