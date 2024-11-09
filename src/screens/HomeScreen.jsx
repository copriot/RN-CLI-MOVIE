import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovies from "../components/TrendingMovies";
import MovieList from "../components/MovieList";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import Loader from "../components/Loader";

const ios = Platform.OS == "ios";

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setToprated] = useState([1, 2, 3]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-neutral-800">
      {/* SearchBarAndLogo */}

      <SafeAreaView className={ios ? "-mb-2" : "mb-3"}>
        <StatusBar style="light" />
        <View className="flex-row justify-between items-center mx-4 ">
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text className="text-white text-3xl font-bold">
            <Text className="text-amber-400">M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size="30" color="white" strokeWidth={3} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Trending movies carousel */}
          <TrendingMovies data={trending} />

          {/* upcoming movie row */}
          <MovieList title="Upcoming" data={upcoming} />
          {/* top rated movies row */}
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
