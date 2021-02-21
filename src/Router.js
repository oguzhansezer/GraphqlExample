import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Characters from "../src/components/Characters";
import Detail from "./components/Detail";

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Rick and Morty Karakterler"
          component={Characters}
        />
        <Stack.Screen name="Detay" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
