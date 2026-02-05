import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type StackParams = {
  Onboarding: undefined;
  Subscription: undefined;
  Main: undefined;
};

export type StackScreenProps<T extends keyof StackParams> =
  NativeStackScreenProps<StackParams, T>;
