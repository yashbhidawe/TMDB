import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(TABS)" options={{ headerShown: false }} />
      <Stack.Screen
        name="movies/[id]"
        options={{
          title: "Movie",
          headerStyle: { backgroundColor: "#0a0a0f" },
          headerTintColor: "#fafafa",
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
