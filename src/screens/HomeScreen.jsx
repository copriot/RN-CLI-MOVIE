import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const ios = Platform.OS == "ios";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-neutral-800">
      {/* SearchBarAndLogo */}

      <SafeAreaView>
        <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
