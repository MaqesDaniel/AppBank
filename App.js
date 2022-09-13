import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home";
import Login from './src/pages/LoginPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator
          initialRouteName="Login"
        >
          <Stack.Screen name="login" component={Login} options={{
            headerShown: false,
          }} />
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: false,
          }} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}


