import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import StoryDetailScreen from "../screens/StoryDetailScreen";
import LoginScreen from "../screens/LoginScreen";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useTheme } from "../utils/themeContext";
import { useAuth } from "../utils/authContext";
import ProfileScreen from "../screens/ProfileScreen";
import MoodTrackerScreen from "../screens/MoodTrackerScreen";
import GroupTherapyDetailScreen from "../screens/GroupTherapyDetailScreen";
import WeeklyReportScreen from "../screens/WeeklyReportScreen";
import SleepLogDetailScreen from "../screens/SleepLogDetailScreen";
import SurveyListScreen from "../screens/SurveyListScreen";
import SurveyDetailScreen from "../screens/SurveyDetailScreen";
import LibraryListScreen from "../screens/LibraryScreen";
import SearchScreen from "../screens/SearchScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

function Layout({ children, showCustomHeader = false, showNavbar = true }) {
  return (
    <View style={styles.container}>
      {showCustomHeader && <Header />}
      <View style={styles.content}>{children}</View>
      {showNavbar && <Navbar />}
    </View>
  );
}

export default function MainNavigator() {
  const { theme } = useTheme();
  const { isAuthenticated, userData } = useAuth();

  return (
    <Stack.Navigator
      style={{ backgroundColor: theme.backgroundLight }}
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.backgroundLight,
          shadowColor: "transparent",
        },
        headerTintColor: theme.textDark,
        headerTitleStyle: {
          color: theme.textDark,
        },
        headerTitleAlign: "center",
      }}
    >
      {!isAuthenticated ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => (
              <Layout showCustomHeader={true} showNavbar={true}>
                <HomeScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="Settings"
            options={{
              headerShown: true,
              headerTitle: "Ayarlar",
              headerBackTitle: "Geri",
              animation: "slide_from_left",
            }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <SettingsScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen name="Profile" options={{ headerTitle: "Profil" }}>
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <ProfileScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="StoryDetail"
            options={{
              headerShown: false,
              animation: "fade",
            }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={false}>
                <StoryDetailScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="MoodLog"
            options={{ headerTitle: "Ruh Hali Kaydı" }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <MoodTrackerScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="GroupTherapyDetail"
            options={{ headerTitle: "Grup Terapileri" }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <GroupTherapyDetailScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="WeeklyReportDetail"
            options={{ headerTitle: "Haftalık Raporlarınız" }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <WeeklyReportScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="SleepLogDetail"
            options={{ headerTitle: "Uyku Kayıtlarınız" }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <SleepLogDetailScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="SurveyListScreen"
            options={{ headerTitle: "Tüm Anketler" }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <SurveyListScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="SurveyDetail"
            options={{ headerTitle: "Anket Detayı" }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <SurveyDetailScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen
            name="LibraryDetail"
            options={{ headerTitle: "Kütüphane" }}
          >
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <LibraryListScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen name="Search" options={{ headerTitle: "Arama", headerLeft: null }}>
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <SearchScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>

          <Stack.Screen name="Chat" options={{ headerTitle: "Sohbetler", headerLeft: null }}>
            {(props) => (
              <Layout showCustomHeader={false} showNavbar={true}>
                <ChatScreen {...props} />
              </Layout>
            )}
          </Stack.Screen>
        </>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
