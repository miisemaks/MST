import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main } from 'screens/main';
import { Profile } from 'screens/profile';
import { Playlist } from 'screens/playlist';
import { TabMainParams } from 'shared/types/Navigation';
import { Home } from 'shared/icons/Home';
import { ProfileCircle } from 'shared/icons/ProfileCircle';
import { colors } from 'shared/styles/colors';
import { Send } from 'shared/icons/Send';

const Tab = createBottomTabNavigator<TabMainParams>();

export const TabMain = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) => (
            <Home color={focused ? 'accent' : 'textSecondary'} />
          ),
          title: 'Главная',
        }}
      />
      <Tab.Screen
        name="Playlist"
        component={Playlist}
        options={{
          tabBarIcon: ({ focused }) => (
            <Send color={focused ? 'accent' : 'textSecondary'} />
          ),
          title: 'Проигрыватель',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileCircle color={focused ? 'accent' : 'textSecondary'} />
          ),
          title: 'Профиль',
        }}
      />
    </Tab.Navigator>
  );
};
