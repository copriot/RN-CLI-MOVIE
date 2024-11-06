import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
const Router = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
