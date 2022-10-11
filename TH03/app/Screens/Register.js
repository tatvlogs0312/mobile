import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Input from "../Component/Input";
import Btn from "../Component/Btn";
import { AntDesign } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";

const Register = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
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
          await axios
            .post("http://192.168.64.12:3000/user/register", {
              name: fullName,
              phone_number: phoneNumber,
              email: email,
              password: password,
            })
            .then((reponse) => {
              console.log(reponse);
              if (reponse.data) {
                Alert.alert("Tạo tài khoản thành công");
              } else {
                Alert.alert("Tạo tài khoản không thành công");
              }
            })
            .catch(() => Alert("Error"));
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
          handlerPress={() => registerUser()}
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
