import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { useTheme } from "../utils/themeContext";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.backgroundLight,
          shadowColor: "transparent",
        },
        headerTintColor: theme.textDark,
        headerTitleStyle: {
          color: theme.textDark,
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Giriş Yap" }}
      />
    </Stack.Navigator>
  );
}
