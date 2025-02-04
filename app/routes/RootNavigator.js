import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./MainNavigator";
import AuthNavigator from "./AuthNavigator";
import { useAuth } from "../utils/authContext";

const Stack = createStackNavigator();

export default function RootNavigator() {
  const { isAuthenticated } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Main" component={MainNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}
