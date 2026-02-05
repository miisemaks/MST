import { memo } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Trash } from 'shared/icons/Trash';
import { colors } from 'shared/styles/colors';
import { Radio } from 'shared/ui/Radio';
import { Text } from 'shared/ui/Text';

type Props = {
  last_4_digits: string;
  onPressDelete: () => void;
  onPress: () => void;
  selected: boolean;
};

export const BankCard = memo((props: Props) => {
  const { last_4_digits, onPress, onPressDelete, selected } = props;
  const { width } = useWindowDimensions();

  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Radio value={selected} onChange={() => onPress()} />
      <Text
        style={[
          styles.text,
          {
            width: width - 136,
          },
        ]}
      >
        **** **** **** {last_4_digits}
      </Text>
      <TouchableOpacity onPressIn={onPressDelete}>
        <Trash color="danger" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.bgPrimary,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  text: {
    fontWeight: 500,
  },
});
