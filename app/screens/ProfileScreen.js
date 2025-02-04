import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useAuth } from "../utils/authContext";
import { useTheme } from "../utils/themeContext";

export default function ProfileScreen() {
  const route = useRoute();
  const { userId } = route.params;
  const { userData } = useAuth();
  const { theme, headerFontSize, bodyFontSize } = useTheme();

  if (!userData || userData.id !== userId) {
    return (
      <View style={[styles.container, { backgroundColor: theme.backgroundLight }]}>
        <Text style={[styles.errorText, { color: theme.textDark }]}>Kullanıcı bulunamadı.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundLight }]}>
      <Text style={[styles.title, { color: theme.textDark, fontSize: headerFontSize }]}>
        {userData.firstName} {userData.lastName}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={[styles.label, { color: theme.textLight }]}>Kullanıcı Adı:</Text>
        <Text style={[styles.value, { color: theme.textDark }]}>{userData.userName}</Text>

        <Text style={[styles.label, { color: theme.textLight }]}>Doğum Tarihi:</Text>
        <Text style={[styles.value, { color: theme.textDark }]}>{userData.birthday}</Text>

        <Text style={[styles.label, { color: theme.textLight }]}>Telefon Numarası:</Text>
        <Text style={[styles.value, { color: theme.textDark }]}>{userData.phoneNumber}</Text>

        <Text style={[styles.label, { color: theme.textLight }]}>E-posta:</Text>
        <Text style={[styles.value, { color: theme.textDark }]}>{userData.email}</Text>

        <Text style={[styles.label, { color: theme.textLight }]}>Kayıt Tarihi:</Text>
        <Text style={[styles.value, { color: theme.textDark }]}>
          {new Date(userData.registrationDateTime).toLocaleString()}
        </Text>

        <Text style={[styles.label, { color: theme.textLight }]}>Son Giriş:</Text>
        <Text style={[styles.value, { color: theme.textDark }]}>
          {new Date(userData.lastLoginDateTime).toLocaleString()}
        </Text>

        <Text style={[styles.label, { color: theme.textLight }]}>Premium Üyelik:</Text>
        <Text style={[styles.value, { color: theme.textDark }]}>
          {userData.isPremium ? "Aktif" : "Pasif"}
        </Text>

        <Text style={[styles.label, { color: theme.textLight }]}>Kullanıcı Rolü:</Text>
        <Text style={[styles.value, { color: theme.textDark }]}>{userData.userRole}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    fontWeight: "400",
    marginTop: 2,
  },
  errorText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
});
