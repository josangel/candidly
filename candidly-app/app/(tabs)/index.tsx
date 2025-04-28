// app/(tabs)/index.tsx

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4F8A8B',
      }}
    >
      <Tabs.Screen
        name="simulator"
        options={{
          title: 'Simulador',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mic-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mediator"
        options={{
          title: 'Mediador',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: 'Reportes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="link"
        options={{
          title: 'Enlace',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="link-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
