import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Wellcome from "./Screens/Wellcome";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import ForgotPass from "./Screens/ForgotPass";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Wellcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
