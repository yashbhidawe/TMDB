import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(TABS)" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ title: "Movie Details" }} />
    </Stack>
  );
}
