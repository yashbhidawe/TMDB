import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  onPress?: () => void;
  placeholder: string;
}
const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image source={icons.search} className="w-5 h-5 mr-2" />
      <TextInput
        placeholder={placeholder}
        className="bg-dark-200 rounded-full px-5 py-4 mt-4"
        onPress={onPress}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
      />
    </View>
  );
};

export default SearchBar;
