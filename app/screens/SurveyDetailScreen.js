import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import surveysData from "../utils/data/surveysData";
import { useTheme } from "../utils/themeContext";

export default function SurveyDetailScreen() {
  const route = useRoute();
  const { id } = route.params;
  const navigation = useNavigation();
  const { theme, headerFontSize, bodyFontSize } = useTheme();
  const styles = createStyles(theme, headerFontSize, bodyFontSize);

  const survey = surveysData.find((item) => item.id === Number(id));

  if (!survey) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Anket bulunamadı.</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Geri Dön</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{survey.title}</Text>
      <Text style={styles.description}>{survey.description}</Text>
      <Text style={styles.date}>
        Oluşturulma Tarihi:{" "}
        {new Date(survey.surveyCreatedAt).toLocaleString("tr-TR")}
      </Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Geri Dön</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme, headerFontSize, bodyFontSize) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.backgroundLight,
    },
    title: {
      fontSize: headerFontSize,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 10,
    },
    description: {
      fontSize: bodyFontSize,
      color: theme.textLight,
      marginBottom: 20,
    },
    date: {
      fontSize: bodyFontSize,
      color: theme.textDark,
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
      marginBottom: 20,
    },
    backButton: {
      backgroundColor: theme.accentDark,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    backButtonText: {
      color: theme.textDark,
      fontWeight: "bold",
    },
  });
