import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const results = movies?.results ?? [];

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="absolute w-full h-full z-0"
        resizeMode="cover"
      />

      {moviesLoading ? (
        <ActivityIndicator size="large" color="#fff" className="flex-1" />
      ) : moviesError ? (
        <View className="flex-1 items-center justify-center px-5">
          <Text className="text-red-500 text-center">
            Error: {moviesError?.message}
          </Text>
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 40,
          }}
          columnWrapperStyle={{
            gap: 16,
            marginBottom: 20,
          }}
          ListHeaderComponent={
            <View className="pt-20 pb-4">
              <Image
                source={icons.logo}
                className="w-12 h-10 mb-6 self-center"
              />

              <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search for movies..."
              />

              <Text className="text-lg text-white font-bold mt-6">
                Latest Movies
              </Text>
            </View>
          }
          renderItem={({ item }) => (
            <View className="flex-1 max-w-[48%]">
              <MovieCard {...item} />
              <Text className="text-white mt-2 font-semibold" numberOfLines={2}>
                {item.title}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
