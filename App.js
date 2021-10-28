import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Actions, Counter, FoodApp, Home, List, ListManagement } from "./screens";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Actions" component={Actions} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={List} options={{ title: "Details" }}  />
        <Stack.Screen name="FoodApp" component={FoodApp}  options={{ headerShown: false }} />
        <Stack.Screen name="Counter" component={Counter} options={{ title: "Counter" }}  />
        <Stack.Screen name="ListManagement" component={ListManagement} options={{ title: "Restaurant Lists" }}  />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
