import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Wellcome from "./Screens/Wellcome";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import ForgotPass from "./Screens/ForgotPass";
import Home from "./Screens/Home";
import Product from "./Screens/Product";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DefaultPage from "./Screens/DefaultPage";
import { CardStyleInterpolators } from "@react-navigation/stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="detailproduct"
          component={DefaultPage}
          options={({ navigation, route }) => ({
            headerTitle: route.params.title,
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "white",
            headerTitleAlign: "center",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
