import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "../utils/themeContext";

export default function SearchScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const mockData = ["Stres Yönetimi", "Uyku Kalitesi", "Meditasyon", "Pozitif Psikoloji"];

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text) {
      setSearchResults(mockData.filter((item) => item.toLowerCase().includes(text.toLowerCase())));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Bir şeyler arayın..."
        placeholderTextColor={theme.textLight}
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.resultItem}>
            <Text style={styles.resultText}>{item}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noResults}>Sonuç bulunamadı.</Text>}
      />
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
    header: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 20,
    },
    searchInput: {
      height: 50,
      borderColor: theme.accentLight,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
      color: theme.textDark,
    },
    resultItem: {
      padding: 15,
      backgroundColor: theme.accentLight,
      borderRadius: 10,
      marginBottom: 10,
    },
    resultText: {
      color: theme.textDark,
      fontSize: 16,
    },
    noResults: {
      textAlign: "center",
      color: theme.textLight,
      fontSize: 16,
      marginTop: 20,
    },
  });
