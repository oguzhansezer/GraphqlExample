import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { registerRootComponent } from "expo";

const Characters = () => {
  return (
    <View style={styles.container}>
      <Text> Karakterler </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Characters;
