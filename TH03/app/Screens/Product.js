import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState([]);
  const [isSelected, setIsSelected] = useState("All");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get(`http://192.168.129.12:3000/products/getType`)
      .then((response) => {
        setType([{ danhmuc: "All" }].concat(response.data));
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
      });
  };

//   useEffect(() => {
//     setData([]);
//     setOffset(0);
//     getDataByType();
//   }, [isSelected]);

//   const getDataByType = async () => {
//     isSelected == "All"
//       ? await axios
//           .get(`http://192.168.129.12:3000/product?offset=${offset}`)
//           .then((response) => {
//             setData(data.concat(response.data));
//             setLoading(false);
//           })
//           .catch((e) => {
//             if (axios.isCancel(e)) return;
//           })
//       : await axios
//           .get(
//             `http://192.168.129.12:3000/product/getbytype?type=${isSelected}&offset=${offset}`
//           )
//           .then((response) => {
//             setData(data.concat(response.data));
//             setLoading(false);
//           })
//           .catch((e) => {
//             if (axios.isCancel(e)) return;
//           });
//   };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.TVSubMenuContainer}>
        <FlatList
          spacing={10}
          data={type}
          horizontal
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                // setIsSelected(item.danh_muc);
                navigation.navigate("detailproduct", { title: item.danhmuc });
              }}
            >
              <Text
                style={{
                  ...styles.TVSubMenuText,
                  // color: item.danh_muc === isSelected ? 'black' : 'gray',
                }}
              >
                {item.danhmuc}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  TVSubMenuContainer: {
    marginTop: 50,
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
