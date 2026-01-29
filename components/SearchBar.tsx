import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  onPress?: () => void;
  placeholder: string;
}

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 h-12">
      <Image source={icons.search} className="w-5 h-5 mr-3" />

      <TextInput
        placeholder={placeholder}
        className="flex-1 text-white"
        placeholderTextColor="#a8b5db"
        editable={false}
        onPressIn={onPress}
      />
    </View>
  );
};

export default SearchBar;
