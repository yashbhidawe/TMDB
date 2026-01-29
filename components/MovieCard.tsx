import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity activeOpacity={0.8} className="w-full">
        <View>
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x900/1a1a1a/ffffff.png",
            }}
            className="w-full h-48 rounded-xl"
            resizeMode="cover"
          />

          <Text
            className="text-white text-sm mt-2 font-semibold"
            numberOfLines={2}
          >
            {title}
          </Text>

          <Text className="text-xs text-gray-400 mt-0.5">
            ⭐ {vote_average?.toFixed(1)} · {release_date?.slice(0, 4)}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
