import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from 'react'
import Input from "../Component/Input";
import Btn from "../Component/Btn";
import { AntDesign } from "@expo/vector-icons";

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableWithoutFeedback onPress={() => {navigation.pop()}}>
          <AntDesign name="back" size={24} color="black" style={{position:'absolute', top : -50, left:-25}}/>
        </TouchableWithoutFeedback>
      </View>
      <Text style={{ fontSize: 30, color: "#2980b9", marginBottom: 20 }}>
        Create new account
      </Text>
      <Input textPh={"Full name"} />
      <Input textPh={"Phone number"} />
      <Input textPh={"Email address"} />
      <Input textPh={"Password"} />
      <View style={styles.btn}>
        <Btn
          title={"Sign up"}
          bgcolor={"#2980b9"}
          bordercolor={"#2980b9"}
          color={"white"}
        />
      </View>
    </View>
  );
}

export default Register

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