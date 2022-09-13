import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = ({ textPh }) => {
  return (
    <View style={{marginVertical:20}}>
      <TextInput style={styles.input} placeholder={textPh} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
  },
});
