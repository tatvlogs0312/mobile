import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Logo from '../Component/Logo';
import Btn from '../Component/Btn';

const Wellcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.wellcome}>Wellcome to your</Text>
      <Text style={styles.title}>
        Wellcome to your app. Build your own social network in minutes
      </Text>

      <View style={{ width: 300, borderRadius: 15, marginTop: 50 }}>
        <Btn
          title={"Log in"}
          color={"white"}
          bgcolor={"#3498db"}
          bordercolor={"#3498db"}
          handlerPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
      
      <View>
        <Btn
          title={"Sign up"}
          color={"#3498db"}
          bordercolor={"#3498db"}
          handlerPress={() => {
            navigation.navigate("Register");
          }}
        />
      </View>
    </View>
  );
}

export default Wellcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  wellcome: {
    fontSize: 25,
    fontWeight: "600",
    color: "#3498db",
    paddingVertical: 20,
  },

  title: {
    width: 300,
    textAlign: "center",
    fontSize: 16,
  },
});