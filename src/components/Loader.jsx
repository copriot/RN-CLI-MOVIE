import { StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";

const Loader = () => {
  return (
    <View className="flex-row justify-center items-center flex-1 mt-40">
      <Progress.CircleSnail thickness={12} size={160} color="#fbbf24" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
