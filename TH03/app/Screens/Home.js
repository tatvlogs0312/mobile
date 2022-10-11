import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, TextInput,FlatList , TouchableOpacity} from "react-native";
import Btn from "../Component/Btn";
import GlobalStyle from "../Utils/GlobalStyle";
import axios, { Axios } from "axios";

export default function Home({ navigation, route }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
   const [data, setData] = useState([]);
   const [type, setType] = useState([]);
   const [isSelected, setIsSelected] = useState("All");
   
  useEffect(() => {
    getData();
    getProduct();
  }, []);

  useEffect(() => {
    getDataByType();
  }, [isSelected]);

  const getProduct = async () => {
    await axios
      .get(`http://192.168.64.12:3000/products/getType`)
      .then((response) => {
        console.log(response);
        setType([{ danhmuc: "All" }].concat(response.data));
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
  }

   const getDataByType = async () => {
     isSelected == "All"
       ? await axios
           .get(`http://192.168.64.12:3000/products`)
           .then((response) => {
             console.log(response.data);
             setData(response.data);
           })
           .catch((e) => {
             if (axios.isCancel(e)) return;
           })
       : await axios
           .get(`http://192.168.64.12:3000/products/danhmuc/${isSelected}`)
           .then((response) => {
            console.log(response.data);
             setData(response.data);
           })
           .catch((e) => {
             if (axios.isCancel(e)) return;
           });
   };

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData").then((value) => {
        if (value != null) {
            console.log(value);
          let user = JSON.parse(value);
          setEmail(user.Email);
          setPassword(user.Password);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("UserData");
      navigation.pop().pop();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <View style={styles.TVSubMenuContainer}>
        <FlatList
          spacing={10}
          data={type}
          horizontal
          // keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setIsSelected(item.danhmuc);
              }}
            >
              <Text
                style={{
                  ...styles.TVSubMenuText,
                  color: item.danhmuc === isSelected ? "black" : "gray",
                }}
              >
                {item.danhmuc}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <FlatList
          spacing={10}
          data={data}
          // keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                paddingVertical: 10,
                width: "100%",
                borderWidth: 1,
                borderColor: "gray",
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 17 }}>{"Name: " + item.name}</Text>
              <Text style={{ fontSize: 17 }}>{"Type: " + item.danhmuc}</Text>
              <Text style={{ fontSize: 17 }}>{"Color: " + item.color}</Text>
              <Text style={{ fontSize: 17 }}>{"Price: " + item.price}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.body}>
        <Text>Wellcome {email}</Text>
        <Btn title="Logout" color="#f40100" handlerPress={removeData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },

  TVSubMenuContainer: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "flex-start",
  },

  TVSubMenuText: {
    marginRight: 10,
    color: "black",
    fontSize: 18,
  },
});
