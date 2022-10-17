import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import Input from "../Component/Input";
import Btn from "../Component/Btn";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { Axios } from "axios";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const setData = async () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert("Warning!", "Please write your data.");
    } else {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        Alert.alert("Warning", "Please write exactly one email address");
      } else {
        await axios
          .post("http://192.168.129.12:3000/user/login", {
            email: email,
            password: password,
          })
          .then((reponse) => {
            if (reponse.data) {
              var user = {
                Email: reponse.data.email,
                Password: reponse.data.password,
              };
              AsyncStorage.setItem("UserData", JSON.stringify(user));
              navigation.navigate("Product");
            } else {
              Alert.alert("Email hoặc mật khẩu không đúng");
            }
          })
          .catch(() => {
            Alert("Email hoặc mật khẩu không đúng");
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
        handlerInput={(email) => setEmail(email)}
      />
      <Input
        textPh={"Password"}
        handlerInput={(password) => setPassword(password)}
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
