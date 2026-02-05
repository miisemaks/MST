import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main } from 'screens/main';
import { Profile } from 'screens/profile';
import { Playlist } from 'screens/playlist';
import { TabMainParams } from 'shared/types/Navigation';

const Tab = createBottomTabNavigator<TabMainParams>();

export const TabMain = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Playlist" component={Playlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
