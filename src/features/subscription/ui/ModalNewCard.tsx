import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button } from 'shared/ui/Button';
import { InputCard, InputCardCVV, InputCardDate } from './InputCard';
import { BlurView } from '@sbaiahmed1/react-native-blur';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from 'shared/styles/colors';
import { Text } from 'shared/ui/Text';
import { Close } from 'shared/icons/Close';
import { useBankCardStore } from 'shared/store/card';
import ToastMessage from 'react-native-toast-message';
import { invalidateQueries } from 'shared/api/client';

type Props = {
  visible: boolean;
  onClose: () => void;
};

export const ModalNewCard = memo((props: Props) => {
  const { visible, onClose } = props;
  const { top, left, right } = useSafeAreaInsets();
  const { appendCard } = useBankCardStore();

  const { watch, setValue, reset } = useForm<{
    card: string;
    cardDate: string;
    cardCVV: string;
    errorCard: boolean;
    errorDate: boolean;
    errorCVV: boolean;
  }>({
    defaultValues: {
      card: '',
      cardDate: '',
      cardCVV: '',
      errorCard: false,
      errorCVV: false,
      errorDate: false,
    },
  });
  const { card, cardDate, cardCVV, errorCVV, errorCard, errorDate } = watch();

  return (
    <Modal
      transparent
      visible={visible}
      onDismiss={() => onClose()}
      animationType="slide"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: top,
      }}
    >
      <BlurView
        blurType="light"
        blurAmount={20}
        style={{
          padding: 16,
          marginBottom: 16,
          marginLeft: left + 16,
          marginRight: right + 16,
          marginTop: 120,
          borderWidth: 1,
          borderColor: colors.border + '66',
          borderRadius: 24,
        }}
        overlayColor={colors.bgSecondary + '66'}
      >
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Новая карта</Text>
          <TouchableOpacity style={styles.touchClose} onPress={() => onClose()}>
            <Close />
          </TouchableOpacity>
        </View>
        <View style={{ gap: 16, paddingTop: 8 }}>
          <InputCard
            value={card}
            onChangeText={value => {
              setValue('card', value);
              setValue('errorCard', false);
            }}
            error={errorCard}
          />
          <View style={styles.newCardDateCVV}>
            <InputCardDate
              value={cardDate}
              onChangeText={value => {
                setValue('cardDate', value);
                setValue('errorDate', false);
              }}
              error={errorDate}
            />
            <InputCardCVV
              value={cardCVV}
              onChangeText={value => {
                setValue('cardCVV', value);
                setValue('errorCVV', false);
              }}
              error={errorCVV}
            />
          </View>
          <Button
            title="Добавить"
            onPress={() => {
              if (
                card.length === 19 &&
                cardDate.length === 7 &&
                cardCVV.length === 3
              ) {
                appendCard({
                  cardNumber: card,
                  date: cardDate,
                  cvv: cardCVV,
                });
                invalidateQueries({ queryKeys: ['mycards'] });
                reset();
                onClose();
              } else {
                setValue('errorCard', card.length < 19);
                setValue('errorDate', cardDate.length < 7);
                setValue('errorCVV', cardCVV.length < 3);
                ToastMessage.show({
                  type: 'error',
                  text1: 'Заполните поля',
                  text2: 'Заполните все поля',
                });
              }
            }}
          />
        </View>
      </BlurView>
    </Modal>
  );
});

const styles = StyleSheet.create({
  touchClose: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: colors.bgPrimary + '66',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    height: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 600,
  },
  newCardDateCVV: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
