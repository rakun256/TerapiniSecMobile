import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import sleepData from "../utils/data/sleepData";
import { useTheme } from "../utils/themeContext";

export default function SleepLogDetailScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [selectedLog, setSelectedLog] = useState(null);

  const openModal = (log) => {
    setSelectedLog(log);
  };

  const closeModal = () => {
    setSelectedLog(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.logItem} onPress={() => openModal(item)}>
      <Text style={styles.logText}>
        {item.date} - {item.duration} ({item.quality})
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sleepData.logs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Modal (Popup) */}
      <Modal
        visible={!!selectedLog}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Uyku Kaydı Detayı</Text>
                <Text style={styles.modalText}>Tarih: {selectedLog?.date}</Text>
                <Text style={styles.modalText}>Süre: {selectedLog?.duration}</Text>
                <Text style={styles.modalText}>Kalite: {selectedLog?.quality}</Text>

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
    logItem: {
      backgroundColor: theme.accentLight,
      padding: 15,
      marginBottom: 10,
      borderRadius: 8,
    },
    logText: {
      fontSize: 16,
      color: theme.textDark,
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
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 10,
    },
    modalText: {
      fontSize: 16,
      color: theme.textLight,
      marginBottom: 10,
    },
    closeButton: {
      backgroundColor: theme.accentDark,
      padding: 10,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    closeButtonText: {
      color: theme.textDark,
      fontWeight: "bold",
    },
  });
