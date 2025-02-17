import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import * as NavigationBar from 'expo-navigation-bar';

import RootNavigator from "./routes/RootNavigator";
import { AuthProvider } from "./utils/authContext";
import { ThemeProvider, useTheme } from "./utils/themeContext";
import { HomeScrollProvider } from "./utils/homeScrollContext";

function ThemedApp() {
  const { theme, isDarkMode } = useTheme();

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(theme.backgroundLight);
    NavigationBar.setButtonStyleAsync(isDarkMode ? 'light' : 'dark');
  }, [theme, isDarkMode]);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.backgroundLight }]}>
    <View style={[styles.container, { backgroundColor: theme.backgroundLight }]}>
      <StatusBar
        backgroundColor={theme.backgroundLight}
        barStyle={isDarkMode ? "light-content" : "dark-content"}
      />
      <AuthProvider>
        <HomeScrollProvider>
          <RootNavigator />
        </HomeScrollProvider>
      </AuthProvider>
    </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
