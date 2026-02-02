import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  onPress?: () => void;
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 h-12">
      <Image source={icons.search} className="w-5 h-5 mr-3" />

      <TextInput
        placeholder={placeholder}
        className="flex-1 text-white outline-none "
        placeholderTextColor="#a8b5db"
        onPressIn={onPress}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
