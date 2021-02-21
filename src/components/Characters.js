import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { gql, useQuery } from "@apollo/client";

const CHARACTERS_QUERY = gql`
  {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const Characters = ({ navigation }) => {
  const { error, loading, data } = useQuery(CHARACTERS_QUERY);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  } else if (error) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  } else {
    //console.log(data.characters.results);
  }
  return (
    <FlatList
      data={data.characters.results}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.navigate("Detay", { id: item.id })}
          >
            <Image
              style={styles.img}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
    width: "100%",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    display: "flex",
    fontSize: 20,
  },
});

export default Characters;
