import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchTerm }));
  const results = movies?.results ?? [];

  useEffect(() => {
    const func = async () => {
      if (searchTerm.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    };
    func();
  }, [searchTerm]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <FlatList
        data={results}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 100,
        }}
        columnWrapperStyle={{
          justifyContent: "center",
          marginVertical: 10,
          gap: 16,
          marginBottom: 20,
        }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image
                source={icons.logo}
                className="w-12 h-10 mb-6 self-center"
              />
            </View>
            <View className="my-5 ">
              <SearchBar
                placeholder="search movies"
                value={searchTerm}
                onChangeText={(text) => setSearchTerm(text)}
              />
            </View>

            {moviesLoading && (
              <ActivityIndicator size="large" color="#fff" className="my-3" />
            )}

            {moviesError && (
              <View className="my-3 px-5">
                <Text className="text-red-500 text-center">
                  Error: {moviesError?.message}
                </Text>
              </View>
            )}

            {!moviesLoading &&
              !moviesError &&
              searchTerm.trim() &&
              results?.length > 0 && (
                <Text className="text-lg text-white font-bold mb-3">
                  Results for `{searchTerm.trim()}`
                </Text>
              )}
          </>
        }
      />
    </View>
  );
};

export default Search;
