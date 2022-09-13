import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../Component/Input";
import Btn from "../Component/Btn";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "#2980b9", marginBottom: 20 }}>
        Sign In
      </Text>
      <Input textPh={"Email or phone number"} />
      <Input textPh={"Password"} />
      <View style={styles.btn}>
        <Btn
          title={"Login"}
          bgcolor={"#3498db"}
          bordercolor={"#3498db"}
          color={"white"}
        />
        <Text style={{fontSize:20,marginVertical:50}}>OR</Text>
        <Btn
          title={"Facebook Login"}
          bgcolor={"#2980b9"}
          bordercolor={"#2980b9"}
          color={"white"}
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

  btn:{
    marginTop:20,
    alignItems:'center',
  }
});
