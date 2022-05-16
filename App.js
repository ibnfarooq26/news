import React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RenderNews from "./component/RenderNews";
import Home from "./component/Home";
import { API_KEY } from "@env";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RenderNews" component={RenderNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
