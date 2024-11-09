import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import Loader from "../components/Loader";

const { width, height } = Dimensions.get("window");
const SearchScreen = () => {
  const navigation = useNavigation();
  const [results, setResults] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);
  let movieName = "Ant-Man and the Wasp:Quantumania";
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"lightgray"}
          className="pb-1 pl-6 flex-1 text-base font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          className="bg-neutral-500 rounded-full p-3 m-1"
        >
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>

      {/* Results */}
      {loading ? (
        <Loader />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">
            Results({results.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.push("Movie", item)}
                >
                  <View className="space-y-2 mb-4">
                    <Image
                      className="rounded-3xl"
                      source={require("../../assets/adaptive-icon.png")}
                      style={{ width: width * 0.44, height: height * 0.3 }}
                    />
                    <Text className="text-neutral-300 ml-1">
                      {movieName.length > 22
                        ? movieName.slice(0, 22) + "..."
                        : movieName}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            source={require("../../assets/Couple.png")}
            className="h-60 w-80 rounded-3xl mt-6"
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
