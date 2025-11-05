import { Tabs } from "expo-router";
import React from "react";

import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import IonIcons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000000ff",
        tabBarInactiveTintColor: "#000000",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#67348B",
          position: "absolute",
          bottom: 35,
          borderRadius: 25,
          height: 70,
          marginHorizontal: "5%",
          shadowColor: "#000",
        },
        tabBarInactiveBackgroundColor: "#67348B",
      }}
    >
      <Tabs.Screen
        name="parametres"
        options={({ route }) => ({
          tabBarIcon: ({ color, focused }) => (
            <IonIcons name="settings" size={28} color={color} />
          ),
          tabBarItemStyle: {
            backgroundColor: route.name === "parametres" ? "white" : "#67348B",
            borderRadius: 20,
            marginTop: 15,
            marginLeft: 20,
            maxWidth: 40,
          },
        })}
      />
      <Tabs.Screen
        name="donnees"
        options={({ route }) => ({
          tabBarIcon: ({ color, focused }) => (
            <IonIcons name="stats-chart" size={25} color={color} />
          ),
          tabBarItemStyle: {
            backgroundColor: route.name === "donnees" ? "white" : "#67348B",
            borderRadius: 20,
            marginTop: 15,
            maxWidth: 40,
            marginLeft: 20,
          },
        })}
      />
      <Tabs.Screen
        name="index"
        options={({ route }) => ({
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
          tabBarItemStyle: {
            backgroundColor: route.name === "index" ? "white" : "#67348B",
            borderRadius: 20,
            marginTop: 15,
            maxWidth: 40,
            marginLeft: 20,
          },
        })}
      />
      <Tabs.Screen
        name="pomodoro"
        options={({ route }) => ({
          tabBarIcon: ({ color, focused }) => (
            <IonIcons name="alarm" size={28} color={color} />
          ),
          tabBarItemStyle: {
            backgroundColor: route.name === "pomodoro" ? "white" : "#67348B",
            borderRadius: 20,
            marginTop: 15,
            maxWidth: 40,
            marginLeft: 20,
          },
        })}
      />
      <Tabs.Screen
        name="profil"
        options={({ route }) => ({
          tabBarIcon: ({ color, focused }) => (
            <IonIcons name="person" size={28} color={color} />
          ),
          tabBarItemStyle: {
            backgroundColor: route.name === "profil" ? "white" : "#67348B",
            borderRadius: 20,
            marginTop: 15,
            maxWidth: 40,
            marginLeft: 20,
          },
        })}
      />
    </Tabs>
  );
}
