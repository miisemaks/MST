import React, { memo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from 'shared/styles/colors';
import { Text } from 'shared/ui/Text';
import { LiquidGlassView } from '@sbaiahmed1/react-native-blur';
import { Radio } from 'shared/ui/Radio';

type Props = {
  title: string;
  description: string;
  cost: number;
  total: number;
  discount: number | null;
  symbol: string;
  bg: string;
  colorSelect: string;
  selected: boolean;
  onSelect: () => void;
};

export const SubscriptionCard = memo((props: Props) => {
  const {
    title,
    description,
    cost,
    total,
    discount,
    symbol,
    bg,
    colorSelect,
    selected,
    onSelect,
  } = props;

  return (
    <LiquidGlassView
      glassType="regular"
      isInteractive
      glassTintColor={bg}
      style={{ borderRadius: 16 }}
    >
      <TouchableOpacity
        style={[styles.root, { backgroundColor: bg }]}
        onPress={onSelect}
      >
        <View style={styles.viewTop}>
          <Text style={styles.title}>{title}</Text>
          <Radio value={selected} onChange={onSelect} color={colorSelect} />
        </View>

        <Text style={styles.description}>{description}</Text>
        <View style={styles.view}>
          <View style={styles.viewTotalCost}>
            {discount ? (
              <Text style={styles.cost}>
                {cost} {symbol}
              </Text>
            ) : null}

            <Text style={styles.total}>
              {total} {symbol}
            </Text>
          </View>

          {discount ? (
            <Text style={styles.discount}>Скидка {discount} %</Text>
          ) : null}
        </View>
      </TouchableOpacity>
    </LiquidGlassView>
  );
});

const styles = StyleSheet.create({
  root: {
    borderRadius: 16,
    padding: 16,
    borderColor: colors.border,
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  viewTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {},
  cost: {
    fontSize: 20,
    fontWeight: 600,
    color: colors.textSecondary,
    textDecorationLine: 'line-through',
  },
  total: {
    fontSize: 20,
    fontWeight: 600,
  },
  discount: {
    color: colors.textSecondary,
  },
  view: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  viewTotalCost: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  select: {
    fontSize: 18,
    fontWeight: 700,
  },
});
