import { icons } from "@/constants/icons";
import React from "react";
import {
  Image,
  Platform,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";

interface Props {
  onPress?: () => void;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
  const { width } = useWindowDimensions();
  const isNarrow = width < 380;
  const paddingHorizontal = isNarrow ? 14 : 18;

  return (
    <View className="flex-row items-center rounded-xl border border-border bg-surface-elevated overflow-hidden">
      <View
        className="justify-center pl-4"
        style={{ paddingRight: paddingHorizontal - 4 }}
      >
        <Image source={icons.search} tintColor="#71717a" className="size-5" />
      </View>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#71717a"
        value={value}
        onChangeText={onChangeText}
        onPressIn={onPress}
        editable={!!onChangeText || !onPress}
        className="flex-1 py-3.5 text-foreground text-base"
        style={{
          paddingRight: paddingHorizontal,
          ...(Platform.OS === "web" && { outlineStyle: "none" }),
        }}
      />
    </View>
  );
};

export default SearchBar;
