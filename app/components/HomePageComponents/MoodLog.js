import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../../utils/themeContext";
import { useNavigation } from "@react-navigation/native";

export default function MoodTracker() {
  const navigation = useNavigation();
  const { theme , headerFontSize , bodyFontSize } = useTheme();
  const styles = createStyles(theme, headerFontSize , bodyFontSize);

  return (
    <View style={styles.moodTrackerSection}>
      <Text style={styles.moodTrackerHeader}>Ruh Halinizi Kaydedin 📝</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("MoodLog")}
        style={styles.moodTrackerButton}
      >
        <Text style={styles.moodTrackerButtonText}>Ruh Hali Kaydına Git</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme, headerFontSize , bodyFontSize) =>
  StyleSheet.create({
    moodTrackerSection: {
      backgroundColor: theme.accentLight,
      padding: 20,
      margin: 20,
      borderRadius: 10,
    },
    moodTrackerHeader: {
      fontSize: headerFontSize,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 10,
      textAlign: "center",
    },
    moodTrackerButton: {
      backgroundColor: theme.accentDark,
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    moodTrackerButtonText: {
      color: theme.textDark,
      fontWeight: "bold",
      textAlign: "center",
      fontSize: bodyFontSize,
    },
  });
