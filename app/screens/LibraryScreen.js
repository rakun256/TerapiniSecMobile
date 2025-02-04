import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBook, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../utils/themeContext";
import libraryData from "../utils/data/libraryData";
import { useRoute } from "@react-navigation/native";

export default function LibraryListScreen() {
  const { theme, headerFontSize, bodyFontSize } = useTheme();
  const styles = createStyles(theme, headerFontSize, bodyFontSize);
  const [selectedBook, setSelectedBook] = useState(null);
  const route = useRoute();

  useEffect(() => {
    if (route.params?.selectedId) {
      const book = libraryData.find((item) => item.id === route.params.selectedId);
      setSelectedBook(book || null);
    }
  }, [route.params]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => setSelectedBook(item)}>
      <FontAwesomeIcon icon={faBook} style={styles.icon} size={40} />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>by {item.author}</Text>
    </TouchableOpacity>
  );

  const closeModal = () => setSelectedBook(null);

  return (
    <View style={styles.container}>
      <FlatList
        data={libraryData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
      />

      {/* Modal (Popup) */}
      <Modal
        visible={!!selectedBook}
        transparent={true}
        animationType="fade"
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{selectedBook?.title}</Text>
                <Text style={styles.modalText}>{selectedBook?.description}</Text>
                <Text style={styles.modalText}>Yazar: {selectedBook?.author}</Text>
                <Text style={styles.modalText}>
                  Yayın Tarihi: {new Date(selectedBook?.date).toLocaleDateString("tr-TR")}
                </Text>
                <TouchableOpacity style={styles.downloadButton}>
                  <FontAwesomeIcon icon={faDownload} size={24} style={styles.downloadIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Kapat</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    gridContainer: {
      justifyContent: "center",
    },
    card: {
      flex: 1,
      backgroundColor: theme.accentLight,
      margin: 10,
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      maxWidth: "45%", // Sabit boyut için sınırlandırma
    },
    icon: {
      color: theme.accentDark,
      marginBottom: 10,
    },
    bookTitle: {
      fontSize: bodyFontSize + 1,
      fontWeight: "bold",
      color: theme.textDark,
      textAlign: "center",
      marginBottom: 5,
    },
    bookAuthor: {
      fontSize: bodyFontSize - 2,
      color: theme.textLight,
      textAlign: "center",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "80%",
      backgroundColor: theme.backgroundLight,
      borderRadius: 15,
      padding: 20,
      alignItems: "center",
    },
    modalTitle: {
      fontSize: headerFontSize,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 10,
    },
    modalText: {
      fontSize: bodyFontSize,
      color: theme.textLight,
      marginBottom: 10,
    },
    downloadButton: {
      marginVertical: 15,
    },
    downloadIcon: {
      color: theme.accentDark,
    },
    closeButton: {
      backgroundColor: theme.accentDark,
      padding: 10,
      borderRadius: 10,
      width: "80%",
      alignItems: "center",
    },
    closeButtonText: {
      color: theme.textDark,
      fontWeight: "bold",
    },
  });
