import MovieCard from "@/components/MovieCard";
import { icons } from "@/constants/icons";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { getNumColumns } from "@/utils/layout";
import { useRouter } from "expo-router";
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

export default function Index() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const numColumns = getNumColumns(width);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const results = movies?.results ?? [];

  return (
    <View className="flex-1 bg-surface">
      <SafeAreaView edges={["top"]} className="flex-1">
        {moviesLoading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size="large" color="#6366f1" />
          </View>
        ) : moviesError ? (
          <View className="flex-1 items-center justify-center px-6">
            <Text className="text-destructive text-center">
              {moviesError?.message}
            </Text>
          </View>
        ) : (
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
                  className="h-9 w-10 mb-6 self-center opacity-90"
                />

                <Text className="text-foreground mt-6 text-xl font-semibold">
                  Latest
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              <View className="flex-1 min-w-0">
                <MovieCard {...item} />
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
}
