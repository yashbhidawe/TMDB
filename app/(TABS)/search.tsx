import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { getNumColumns } from "@/utils/layout";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const H_PADDING = 20;
const GAP = 12;

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const { width } = useWindowDimensions();
  const numColumns = getNumColumns(width);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchTerm }));

  const results = movies?.results ?? [];

  useEffect(() => {
    const t = setTimeout(() => {
      if (searchTerm.trim()) {
        loadMovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(t);
  }, [searchTerm]);

  return (
    <View className="flex-1 bg-surface">
      <SafeAreaView edges={["top"]} className="flex-1">
        <FlatList
          data={results}
          key={`grid-${numColumns}`}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: H_PADDING,
            paddingBottom: 100,
          }}
          columnWrapperStyle={{ gap: GAP, marginBottom: GAP + 8 }}
          ListHeaderComponent={
            <View className="pb-5">
              <Image
                source={icons.logo}
                className="mb-6 h-9 w-10 self-center opacity-90"
              />
              <SearchBar
                placeholder="Search movies..."
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
              {moviesLoading && (
                <View className="py-4">
                  <ActivityIndicator size="small" color="#6366f1" />
                </View>
              )}
              {moviesError && (
                <Text className="py-2 text-destructive">
                  {moviesError?.message}
                </Text>
              )}
              {!moviesLoading &&
                !moviesError &&
                searchTerm.trim() &&
                results.length > 0 && (
                  <Text className="text-foreground mt-2 text-lg font-semibold">
                    Results for “{searchTerm.trim()}”
                  </Text>
                )}
            </View>
          }
          renderItem={({ item }) => (
            <View className="flex-1 min-w-0">
              <MovieCard {...item} />
            </View>
          )}
          ListEmptyComponent={
            !moviesLoading && !moviesError ? (
              <View className="py-12">
                <Text className="text-muted text-center">
                  {searchTerm.trim() ? "No results." : "Type to search movies."}
                </Text>
              </View>
            ) : null
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default Search;
