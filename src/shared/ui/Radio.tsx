import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from 'shared/styles/colors';

type Props = {
  value: boolean;
  onChange: () => void;
  size?: number;
  color?: string;
};

export const Radio = memo((props: Props) => {
  const { size = 24, value, onChange, color = colors.accent } = props;

  return (
    <TouchableOpacity
      style={[
        styles.root,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderColor: value ? color : colors.border + '66',
        },
      ]}
      onPress={onChange}
    >
      {value ? (
        <View
          style={[
            styles.round,
            {
              width: size - 8,
              height: size - 8,
              borderRadius: (size - 4) / 2,
              backgroundColor: color,
            },
          ]}
        />
      ) : null}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    borderWidth: 2,
    borderColor: colors.border + '66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  round: {
    backgroundColor: colors.accent,
  },
});
