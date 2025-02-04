import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../utils/themeContext";
import { useNavigation } from "@react-navigation/native";
import surveysData from "../utils/data/surveysData";

export default function SurveyListScreen() {
  const { theme, headerFontSize, bodyFontSize } = useTheme();
  const styles = createStyles(theme, headerFontSize, bodyFontSize);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.surveyItem}
      onPress={() => navigation.navigate("SurveyDetail", { id: item.id })}
    >
      <FontAwesomeIcon icon={faClipboardList} style={styles.icon} size={18} />
      <Text style={styles.surveyText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={surveysData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />
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
    header: {
      fontSize: headerFontSize,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 20,
    },
    surveyItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.accentLight,
      padding: 15,
      marginBottom: 10,
      borderRadius: 10,
    },
    icon: {
      marginRight: 10,
      color: theme.accentDark,
    },
    surveyText: {
      fontSize: bodyFontSize,
      color: theme.textDark,
    },
  });
