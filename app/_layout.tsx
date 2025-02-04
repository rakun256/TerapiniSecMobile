import React from "react";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
