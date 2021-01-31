import { ApolloProvider } from "@apollo/client";
import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import Router from "./src/Router";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}
