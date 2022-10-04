import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from "react-native";
import Input from "../Component/Input";
import Btn from "../Component/Btn";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setData = async () => {
    if (email.length == 0 || password.length == 0) {
      alert.alert("Warning", "Please write your email address or password");
      return;
    } else {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(email)) {
        Alert.alert("Warning", "Please write exactly one email address");
        return;
      } else {
        try {
          var user = {
            Email: email,
            Password: password,
          };
          await AsyncStorage.setItem("UserData", JSON.stringify(user));
          AsyncStorage.getItem("UserData").then((value) => {
            if (value != null) {
              Alert.alert("Notify", "Sign up successfully");
            }
            console.log(value);
          });
        } catch (error) {
          console.log(error);
        }
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
        Create new account
      </Text>
      <Input
        textPh={"Full name"}
        handlerInput={(fullName) => setFullName(fullName)}
      />
      <Input
        textPh={"Phone number"}
        handlerInput={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <Input
        textPh={"Email address"}
        handlerInput={(email) => setEmail(email)}
      />
      <Input
        textPh={"Password"}
        handlerInput={(password) => setPassword(password)}
      />
      <View style={styles.btn}>
        <Btn
          title={"Sign up"}
          bgcolor={"#2980b9"}
          bordercolor={"#2980b9"}
          color={"white"}
          handlerPress={() => setData()}
        />
      </View>
    </View>
  );
};

export default Register;

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
