import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";

const Btn = ({ title, color, bgcolor, bordercolor }) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          width: 300,
          height: 50,
          borderRadius: 25,
          marginVertical: 10,
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          borderColor: bordercolor,
          backgroundColor: bgcolor,
        }}
      >
        <Text
          style={{
            color: color,
            fontWeight: "600",
            fontSize: 20,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({});
