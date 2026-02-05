import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BankCardType } from 'shared/types/BankCard';

// Временная логика добавления удаления карты
type NavigationState = {
  cards: BankCardType[];
  appendCard: (value: Omit<BankCardType, 'id'>) => void;
  removeCard: (value: number) => void;
};

export const useBankCardStore = create<NavigationState>()(
  persist(
    set => ({
      cards: [],
      appendCard: value =>
        set(state => ({
          cards: [...state.cards, { ...value, id: state.cards.length + 1 }],
        })),
      removeCard: value =>
        set(state => ({
          cards: state.cards.filter(item => item.id !== value),
        })),
    }),
    {
      name: 'cards',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
