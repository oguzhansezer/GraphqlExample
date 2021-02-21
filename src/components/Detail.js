import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { gql, useQuery } from "@apollo/client";

const CHARACTERS_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      origin {
        name
      }
    }
  }
`;

const Detail = ({ route }) => {
  const { id } = route.params;
  const { error, loading, data } = useQuery(CHARACTERS_QUERY, {
    variables: {
      id: id,
    },
  });
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
  }
  const { image, name, species, gender } = data.character;
  const planet = data.character.origin.name;
  return (
    <View style={styles.container}>
      <View style={{ borderBottomColor: "#909497", borderBottomWidth: 1 }}>
        <Image
          style={styles.img}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ margin: 10, padding: 10 }}>
          <View style={[styles.contain, { marginBottom: 20 }]}>
            <Text style={styles.textLabel}>İsmi</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View style={[styles.contain, { marginBottom: 20 }]}>
            <Text style={styles.textLabel}>Irkı</Text>
            <Text style={styles.text}>{species}</Text>
          </View>
          <View style={[styles.contain, { marginBottom: 20 }]}>
            <Text style={styles.textLabel}>Cinsiyeti</Text>
            <Text style={styles.text}>{gender}</Text>
          </View>
          <View style={styles.contain}>
            <Text style={styles.textLabel}>Gezegeni</Text>
            <Text style={styles.text}>{planet}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },
  img: {
    width: 200,
    height: 200,
    marginVertical: 10,
    borderRadius: 20,
    marginRight: 5,
  },
  contain: {
    borderWidth: 1,
    borderColor: "#909497",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
  },
  textLabel: {
    fontSize: 24,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 22,
  },
});

export default Detail;
