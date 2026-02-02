import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, Platform, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function TabIcon({
  focused,
  icon,
  label,
}: {
  focused: boolean;
  icon: number;
  label: string;
}) {
  return (
    <View
      className={`flex-row items-center justify-center rounded-full ${
        focused ? "bg-accent px-4 py-2" : ""
      }`}
    >
      <Image
        source={icon}
        tintColor={focused ? "#e0e7ff" : "#71717a"}
        className="size-5"
      />
      {focused && (
        <Text className="text-accent-foreground text-sm font-semibold ml-2">
          {label}
        </Text>
      )}
    </View>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const tabBarHeight = 56;
  const bottom = Math.max(insets.bottom, 12);

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#12121a",
          borderTopWidth: 1,
          borderTopColor: "#1c1c24",
          height: tabBarHeight + bottom,
          paddingTop: 8,
          paddingBottom: bottom,
          paddingHorizontal: Platform.OS === "ios" ? 24 : 16,
        },
        tabBarActiveTintColor: "#6366f1",
        tabBarInactiveTintColor: "#71717a",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} label="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} label="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
