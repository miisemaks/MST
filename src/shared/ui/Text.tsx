import React from 'react';
import { Text as RCTText, StyleSheet, TextProps } from 'react-native';
import { colors } from 'shared/styles/colors';

type Props = TextProps & {
  variant?: 'regular' | 'medium' | 'bold';
};

export const Text = (props: Props) => {
  const { children, ...rest } = props;

  return (
    <RCTText
      allowFontScaling={false}
      {...rest}
      style={[styles.text, rest.style]}
    >
      {children}
    </RCTText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.textPrimary,
  },
});
