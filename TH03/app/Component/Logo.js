import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <View>
      <Text style={styles.logo}>C</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 150,
    fontWeight: "800",
    color: "#3498db",
  },
});
