import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Actions, Counter, DetailsFood, FoodApp, Home, List, ListManagement, MyOnboarding, Store } from "./screens";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">

        <Stack.Screen name="Onboarding" component={MyOnboarding}  options={{ headerShown: false }}  />
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="Actions" component={Actions} options={{ headerShown: false }} />
        <Stack.Screen name="List" component={List} options={{ title: "Details" }}  />
        <Stack.Screen name="FoodApp" component={FoodApp}  options={{ headerShown: false }} />
        <Stack.Screen name="DetailsFood" component={DetailsFood}  options={{ title: 'Details' }} />
        <Stack.Screen name="Counter" component={Counter} options={{ title: "Counter" }}  />
        <Stack.Screen name="ListManagement" component={ListManagement} options={{ title: "Restaurant Lists" }}  />
        <Stack.Screen name="Store" component={Store} options={{ title: "Store" }}  />

      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
