import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import groupTherapiesData from "../utils/data/groupTherapiesData";
import { useTheme } from "../utils/themeContext";

export default function GroupTherapyDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params;  
  const { theme } = useTheme();
  const styles = createStyles(theme);

  console.log("Alınan ID:", id);

  const therapy = groupTherapiesData.find((item) => item.id === Number(id));

  if (!therapy) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Grup terapisi bulunamadı.</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const dateObj = new Date(therapy.sessionDateTime);
  const dateStr = dateObj.toLocaleDateString("tr-TR");
  const timeStr = dateObj.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{therapy.sessionName}</Text>
      <Text style={styles.date}>
        {dateStr} tarihinde, saat {timeStr}
      </Text>
      <Text style={styles.description}>{therapy.description}</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Ana Sayfaya Dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.backgroundLight,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 10,
    },
    date: {
      fontSize: 16,
      color: theme.textDark,
      marginBottom: 15,
    },
    description: {
      fontSize: 16,
      color: theme.textLight,
      marginBottom: 20,
    },
    errorContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.backgroundLight,
    },
    errorText: {
      fontSize: 18,
      color: "red",
      textAlign: "center",
      marginBottom: 20,
    },
    backButton: {
      backgroundColor: theme.accentDark,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
    },
    backButtonText: {
      color: theme.textDark,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
