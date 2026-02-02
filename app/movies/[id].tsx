import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovieDetails = () => {
  return (
    <View className="flex-1 bg-surface">
      <SafeAreaView edges={["top"]} className="flex-1 px-5 pt-4">
        <Text className="text-foreground text-2xl font-semibold">
          Movie details
        </Text>
        <View className="flex-1 items-center justify-center">
          <Text className="text-muted text-center">
            Details view coming soon.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default MovieDetails;
