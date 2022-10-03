import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./pages/Home";
import Login from './pages/LoginPage';
import UserForm from './pages/Registration/UserForm'
import Transaction from './pages/Transactions';
import Cartoes from './pages/Cards'
import CardExtract from './pages/CardExtract';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            {
                <Stack.Navigator
                    initialRouteName="Login"
                >
                    <Stack.Screen name="login" component={Login} options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="UserForm" component={UserForm} options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="Home" component={Home} options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="Transaction" component={Transaction} options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="Cartoes" component={Cartoes} options={{
                        headerShown: false,
                    }} />
                    <Stack.Screen name="CardExtract" component={CardExtract} options={{
                        headerShown: false,
                    }} />
                </Stack.Navigator>
            }
        </NavigationContainer>
    );
}


