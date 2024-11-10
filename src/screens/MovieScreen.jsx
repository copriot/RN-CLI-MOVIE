import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import {
  fallBackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500,
} from "../api/moviedb";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

const MovieScreen = () => {
  const movieName = "lorem lorem lorem lorem";
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    console.log("İtemİD GELDİİ", item.id);
    setLoading(true);
    getMovieDetails(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    setLoading(false);
  };
  const getMovieCredits = async (id) => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) setCast(data.cast);
    setLoading(false);
  };
  const getSimilarMovies = async (id) => {
    const data = await fetchSimilarMovies(id);
    //  console.log("veri geldiii", data);
    if (data && data.results) setSimilarMovies(data.results);
  };

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full">
        <SafeAreaView
          className={
            "absolute z-20 w-full flex-row justify-between items-center px-4" +
            topMargin
          }
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-xl p-1 bg-amber-400"
          >
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon size="35" color={isFavourite ? "#fbbf24" : "white"} />
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <Loader />
        ) : (
          <View>
            <Image
              // source={require("../../assets/favicon.png")}
              source={{
                uri: image500(movie?.poster_path) || fallBackMoviePoster,
              }}
              style={{ width, height: height * 0.55 }}
            />
            <LinearGradient
              colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
            {/* movieDetails */}

            <View style={{ marginTop: -(height * 0.39) }} className="space-y-3">
              <Text className="text-white text-center text-3xl font-bold tracking-wider">
                {movie?.title}
              </Text>
              {/* status, release,runtime */}
              {movie?.id ? (
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  {movie?.status} * {movie?.release_date?.split("-")[0]} *{" "}
                  {movie?.runtime}
                </Text>
              ) : null}
              {/* genres */}
              <View className="flex-row justify-center mx-4 space-x-2">
                {movie?.genres?.map((genre, index) => {
                  let showDot = index + 1 != movie.genres.length;
                  return (
                    <Text
                      key={index}
                      className="text-neutral-400 font-semibold text-base text-center"
                    >
                      {genre.name} {showDot ? "*" : null}
                    </Text>
                  );
                })}
              </View>
              {/* Description */}
              <Text className="text-neutral-400 mx-4 tracking-wide">
                {movie?.overview}
              </Text>
            </View>

            {/* cast */}
            <Cast navigation={navigation} cast={cast} />

            {/* similar movies */}
            <MovieList
              title="Similar Movies"
              hideSeeAll={true}
              data={similarMovies}
            />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
