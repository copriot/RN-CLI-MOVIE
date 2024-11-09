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

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
const topMargin = ios ? "" : "mt-3";

const MovieScreen = () => {
  const movieName = "lorem lorem lorem lorem";
  const { params: item } = useRoute();
  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([1, 2, 3, 4]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //movie details api
  }, [item]);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      className="flex-1 bg-neutral-900"
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
              source={require("../../assets/favicon.png")}
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

            <View style={{ marginTop: -(height * 0.19) }} className="space-y-3">
              <Text className="text-white text-center text-3xl font-bold tracking-wider">
                {movieName}
              </Text>
              {/* status, release,runtime */}
              <Text className="text-neutral-400 font-semibold text-base text-center">
                Relaesed * 2020 * 170min
              </Text>
              {/* genres */}
              <View className="flex-row justify-center mx-4 space-x-2">
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  Actiom *
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  Thrill *
                </Text>
                <Text className="text-neutral-400 font-semibold text-base text-center">
                  Comedy
                </Text>
              </View>
              {/* Description */}
              <Text className="text-neutral-400 mx-4 tracking-wide">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi non quaerat temporibus nostrum officiis rem dolore,
                dolores magnam soluta animi eos asperiores quisquam sequi nemo
                ducimus, doloremque placeat autem dolor.
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
