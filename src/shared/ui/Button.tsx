import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';
import { colors } from 'shared/styles/colors';
import { LiquidGlassView } from '@sbaiahmed1/react-native-blur';

type Props = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
};

export const Button = (props: Props) => {
  const {
    title,
    onPress,
    variant = 'primary',
    loading,
    disabled,
    style,
    containerStyle,
  } = props;

  return (
    <LiquidGlassView
      style={[styles.container, containerStyle]}
      isInteractive
      glassType="regular"
      glassTintColor={variant === 'primary' ? colors.accent : 'transparent'}
      glassOpacity={0.8}
    >
      <TouchableOpacity
        style={[styles.touch, style]}
        onPress={onPress}
        disabled={disabled}
      >
        {loading ? (
          <ActivityIndicator color={colors.textPrimary} />
        ) : (
          <Text
            style={{
              color: disabled
                ? colors.textSecondary
                : variant === 'primary'
                ? colors.textPrimary
                : colors.accent,
              fontWeight: 600,
            }}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </LiquidGlassView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  touch: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});
