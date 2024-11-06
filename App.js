
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import "./global.css"
import Router from './src/navigation/Router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

