import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../utils/themeContext";

const mockChats = [
  { id: "1", name: "Emre Uslu", lastMessage: "Merhaba, nasıl gidiyor?" },
  { id: "2", name: "Ecem Nur Özen", lastMessage: "Bugün görüşebilir miyiz?" },
  { id: "3", name: "Rabia Şeremet", lastMessage: "Teşekkürler!" },
];

export default function ChatScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem}>
            <FontAwesomeIcon icon={faCommentDots} size={28} style={styles.icon} />
            <View style={styles.chatTextContainer}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
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
    chatItem: {
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
      backgroundColor: theme.accentLight,
      borderRadius: 10,
      marginBottom: 10,
    },
    icon: {
      color: theme.accentDark,
      marginRight: 10,
    },
    chatTextContainer: {
      flex: 1,
    },
    chatName: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.textDark,
    },
    chatMessage: {
      fontSize: 14,
      color: theme.textLight,
    },
  });
