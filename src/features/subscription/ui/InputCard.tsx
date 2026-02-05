import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { MaskedTextInput } from 'react-native-advanced-input-mask';
import { colors } from 'shared/styles/colors';
import { Text } from 'shared/ui/Text';

type Props = {
  value: string;
  onChangeText: (formattedValue: string, extractedValue: string) => void;
  error?: boolean;
};

export const InputCard = memo((props: Props) => {
  const { value, onChangeText, error } = props;

  return (
    <View style={styles.root}>
      <Text
        style={[
          styles.label,
          {
            color: error ? colors.danger : colors.textSecondary,
          },
        ]}
      >
        Номер карты
      </Text>
      <MaskedTextInput
        style={[
          styles.input,
          { borderColor: error ? colors.danger : colors.border },
        ]}
        value={value}
        onChangeText={(formattedValue, extractedValue) =>
          onChangeText(formattedValue, extractedValue)
        }
        autoFocus
        mask="[0000] [0000] [0000] [0000]"
        placeholder="0000 0000 0000 0000"
        keyboardType="number-pad"
      />
      {error ? <Text style={styles.error}>Заполните поле</Text> : null}
    </View>
  );
});

export const InputCardDate = memo((props: Props) => {
  const { value, onChangeText, error } = props;

  return (
    <View style={styles.root}>
      <Text
        style={[
          styles.label,
          { color: error ? colors.danger : colors.textSecondary },
        ]}
      >
        Дата
      </Text>
      <MaskedTextInput
        value={value}
        style={[
          styles.input,
          { borderColor: error ? colors.danger : colors.border },
        ]}
        onChangeText={(formatted, extracted) =>
          onChangeText(formatted, extracted)
        }
        keyboardType="number-pad"
        mask="[00] / [00]"
        placeholder="00 / 00"
      />
      {error ? <Text style={styles.error}>Заполните поле</Text> : null}
    </View>
  );
});

export const InputCardCVV = memo((props: Props) => {
  const { value, onChangeText, error } = props;
  return (
    <View style={styles.root}>
      <Text
        style={
          (styles.label,
          {
            color: error ? colors.danger : colors.textSecondary,
          })
        }
      >
        CVV
      </Text>
      <MaskedTextInput
        value={value}
        style={[
          styles.input,
          { borderColor: error ? colors.danger : colors.border },
        ]}
        onChangeText={(formatted, extracted) =>
          onChangeText(formatted, extracted)
        }
        keyboardType="number-pad"
        mask="[000]"
        placeholder="000"
      />
      {error ? <Text style={styles.error}>Заполните поле</Text> : null}
    </View>
  );
});

const styles = StyleSheet.create({
  root: { gap: 4 },
  label: {},
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 18,
    borderColor: colors.border,
    backgroundColor: colors.bgSecondary,
  },
  error: {
    color: colors.danger,
    fontSize: 12,
  },
});
