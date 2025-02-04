import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import reportData from "../../utils/data/weeklyReportData";
import { useTheme } from "../../utils/themeContext";

export default function WeeklyReportPreview() {
  const navigation = useNavigation();
  const { theme, headerFontSize, bodyFontSize } = useTheme();
  const styles = createStyles(theme, headerFontSize, bodyFontSize);

  // En güncel raporu seçiyoruz
  const latestReport = reportData.sort(
    (a, b) => new Date(b.reportCreatedAt) - new Date(a.reportCreatedAt)
  )[0];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Haftalık Raporunuz</Text>
      <View style={styles.reportPreview}>
        <Text style={styles.content}>{latestReport.content}</Text>
        <Text style={styles.situation}>Durum: {latestReport.reportSituation}</Text>
      </View>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("WeeklyReportDetail")}
      >
        <Text style={styles.buttonText}>Tüm Raporları Görüntüle</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme, headerFontSize, bodyFontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.accentLight,
      borderRadius: 15,
      padding: 20,
      margin: 20,
    },
    header: {
      fontSize: headerFontSize,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 10,
    },
    reportPreview: {
      backgroundColor: theme.backgroundLight,
      padding: 10,
      borderRadius: 10,
      marginBottom: 15,
    },
    content: {
      fontSize: bodyFontSize,
      color: theme.textLight,
      marginBottom: 5,
    },
    situation: {
      fontSize: bodyFontSize - 2,
      fontWeight: "bold",
      color: theme.textDark,
    },
    button: {
      backgroundColor: theme.accentDark,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: theme.textDark,
      fontSize: bodyFontSize,
      fontWeight: "bold",
    },
  });
