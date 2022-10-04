import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, TextInput } from "react-native";
import Btn from "../Component/Btn";
import GlobalStyle from "../Utils/GlobalStyle";

export default function Home({ navigation, route }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
            console.log(value);
          let user = JSON.parse(value);
          setEmail(user.Email);
          setPassword(user.Password);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.body}>
      <Text>Wellcome {email}</Text>
      <Btn title="Logout" color="#f40100" handlerPress={removeData} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
