import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const DefaultPage = ({ route }) => {
  const [data, setData] = useState([]);
  var [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const getDataByType = async () => {
    route.params.title == "All"
      ? await axios
          .get(`http://192.168.129.12:3000/products?offset=${offset}`)
          .then((response) => {
            console.log(response);
            setData(data.concat(response.data));
            setLoading(false);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
          })
      : await axios
          .get(
            `http://192.168.129.12:3000/products/danhmuc/${route.params.title}?offset=${offset}`
          )
          .then((response) => {
            console.log(response);
            setData(data.concat(response.data));
            setLoading(false);
          })
          .catch((e) => {
            if (axios.isCancel(e)) return;
          });
  };

  useEffect(() => {
    getDataByType();
  }, []);

const handleOnLoadMore = () => {
  setOffset((offset += 6));
  setLoading(true);
  getDataByType();
};

const renderFooter = () => {
  return (
    <View
      style={{
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          handleOnLoadMore();
        }}
      >
        <Text style={{ color: "blue", fontSize: 20 }}>Load more</Text>
      </TouchableOpacity>
    </View>
  );
};

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
        <FlatList
          spacing={10}
          data={data}
          //   keyExtractor={(item, index) => index.toString()}
          //   onEndReached={handleEndReached}
          //   onEndReachedThreshold={1}
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <View
              style={{
                paddingVertical: 10,
                width: "100%",
                borderWidth: 1,
                borderColor: "gray",
                paddingHorizontal: 10,
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 17 }}>{"ID: " + item.id}</Text>
              <Text style={{ fontSize: 17 }}>{"Name: " + item.name}</Text>
              <Text style={{ fontSize: 17 }}>{"Type: " + item.danhmuc}</Text>
              <Text style={{ fontSize: 17 }}>{"Color: " + item.color}</Text>
              <Text style={{ fontSize: 17 }}>{"Price: " + item.price}</Text>
            </View>
          )}
        />
      </View>
      <View
        style={{
          marginBottom: 200,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            handleOnLoadMore();
          }}
        >
          <Text style={{ color: "blue" }}>Load more</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DefaultPage;

const styles = StyleSheet.create({
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
