import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return null;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: Colors[colorScheme ?? 'light'].backgroundSecondary,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          title: 'Accueil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarShowLabel: false,
          title: 'Recherche',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search1' : 'search1'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
