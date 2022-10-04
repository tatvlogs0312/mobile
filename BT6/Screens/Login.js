import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import React, { useState, useEffect } from "react";
import Input from "../Component/Input";
import Btn from "../Component/Btn";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        console.log(value);
        if (value != null) {
          navigation.navigate("Home");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        Alert.alert("Warning", "Please write exactly one email address");
      } else {
        AsyncStorage.getItem("UserData").then((value) => {
          console.log("data : " + value);
          let user = JSON.parse(value);
          if (user.Email == email && user.Password == password) {
            console.log(value);
            navigation.navigate("Home");
          } else {
            Alert.alert("Warning", "Password is incorrect");
          }
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.pop();
          }}
        >
          <AntDesign
            name="back"
            size={24}
            color="black"
            style={{ position: "absolute", top: -50, left: -25 }}
          />
        </TouchableWithoutFeedback>
      </View>
      <Text style={{ fontSize: 30, color: "#2980b9", marginBottom: 20 }}>
        Sign In
      </Text>
      <Input
        textPh={"Email or phone number"}
        handlerInput={email => setEmail(email)}
      />
      <Input
        textPh={"Password"}
        handlerInput={password => setPassword(password)}
      />
      <View style={styles.btn}>
        <Btn
          title={"Login"}
          bgcolor={"#3498db"}
          bordercolor={"#3498db"}
          color={"white"}
          handlerPress={setData}
        />
        <Text style={{ fontSize: 20, marginVertical: 50 }}>OR</Text>
        <Btn
          title={"Forgot password"}
          bgcolor={"#2980b9"}
          bordercolor={"#2980b9"}
          color={"white"}
          handlerPress={() => {
            navigation.navigate("ForgotPass");
          }}
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 100,
  },

  btn: {
    marginTop: 20,
    alignItems: "center",
  },
});
