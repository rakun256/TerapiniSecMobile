import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../utils/themeContext";
import libraryData from "../../utils/data/libraryData";

export default function LibraryPreview() {
  const navigation = useNavigation();
  const { theme, headerFontSize, bodyFontSize } = useTheme();
  const styles = createStyles(theme, headerFontSize, bodyFontSize);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("LibraryDetail", { selectedId: item.id })}
    >
      <View style={styles.bookCover}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>by {item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Günün Kaynağı</Text>
      <FlatList
        data={libraryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LibraryDetail")}
      >
        <Text style={styles.buttonText}>Tüm Kaynaklara Git</Text>
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme, headerFontSize, bodyFontSize) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.accentLight,
      borderRadius: 10,
      padding: 20,
      margin: 20,
    },
    header: {
      fontSize: headerFontSize,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 10,
    },
    flatListContainer: {
      paddingVertical: 10,
    },
    card: {
      backgroundColor: theme.accentDark,
      borderRadius: 10,
      width: 150,
      marginRight: 15,
      padding: 10,
      alignItems: "center",
    },
    bookCover: {
      width: 140,
      height: 200,
      backgroundColor: theme.accentDark,
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      padding: 10,
    },
    bookTitle: {
      fontSize: bodyFontSize + 2,
      fontWeight: "bold",
      color: theme.textDark,
      textAlign: "center",
      marginBottom: 10,
    },
    bookAuthor: {
      fontSize: bodyFontSize - 2,
      color: theme.textLight,
      textAlign: "center",
    },
    button: {
      backgroundColor: theme.accentDark,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 20,
    },
    buttonText: {
      color: theme.textDark,
      fontSize: bodyFontSize,
      fontWeight: "bold",
    },
  });
