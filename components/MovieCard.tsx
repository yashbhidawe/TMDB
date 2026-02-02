import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const POSTER_ASPECT = 2 / 3;

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity activeOpacity={0.85} className="flex-1 min-w-0">
        <View className="overflow-hidden rounded-2xl bg-surface-elevated">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x900/1a1a24/71717a.png",
            }}
            style={{ aspectRatio: 1 / POSTER_ASPECT, width: "100%" }}
            resizeMode="cover"
          />
          <View className="absolute right-2 top-2 rounded-md bg-black/70 px-2 py-1">
            <Text className="text-foreground text-xs font-semibold">
              ★ {vote_average?.toFixed(1) ?? "—"}
            </Text>
          </View>
        </View>
        <Text
          className="text-foreground mt-2 text-sm font-medium leading-tight"
          numberOfLines={2}
        >
          {title}
        </Text>
        {release_date ? (
          <Text className="text-muted mt-0.5 text-xs">
            {release_date.slice(0, 4)}
          </Text>
        ) : null}
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
