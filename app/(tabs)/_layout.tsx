import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#194',
        headerStyle: {
          backgroundColor: '#194',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({
            color,
            focused,
          }: {
            color: string;
            focused: boolean;
          }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
