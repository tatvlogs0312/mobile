import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Square from "./Square";

export default function App() {
  return (
    <View style={styles.container}>
      <Square text={"Square 1"} color={"#2ecc71"} />
      <Square text={"Square 2"} color={"#3498db"} />
      <Square text={"Square 3"} color={"#8e44ad"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});
