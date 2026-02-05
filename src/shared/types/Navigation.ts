import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type StackParams = {
  Onboarding: undefined;
  Subscription: undefined;
  SubscriptionFill: {
    id: number;
  };
  VerifySubscribe: undefined;
  Main: undefined;
};

export type TabMainParams = {
  Main: undefined;
  Playlist: undefined;
  Profile: undefined;
};

export type StackScreenProps<T extends keyof StackParams> =
  CompositeScreenProps<
    NativeStackScreenProps<StackParams, T>,
    BottomTabScreenProps<TabMainParams>
  >;

export type TabMainScreenProps<T extends keyof TabMainParams> =
  CompositeScreenProps<
    BottomTabScreenProps<TabMainParams, T>,
    NativeStackScreenProps<StackParams>
  >;
