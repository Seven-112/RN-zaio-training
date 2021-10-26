import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Actions from "./screens/Actions";
import Home from "./screens/Home";
import List from "./screens/List";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home}   />
        <Stack.Screen name="Actions" component={Actions} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={List} options={{ title: "Details" }}  />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
