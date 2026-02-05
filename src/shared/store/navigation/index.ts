import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackParams } from 'shared/types/navigation';

type NavigationState = {
  initialScreen: keyof StackParams;
  setInitialScreen: (value: keyof StackParams) => void;
};

export const useNavigationStore = create<NavigationState>()(
  persist(
    set => ({
      initialScreen: 'Onboarding',
      setInitialScreen: value =>
        set({
          initialScreen: value,
        }),
    }),
    {
      name: 'navigation',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
