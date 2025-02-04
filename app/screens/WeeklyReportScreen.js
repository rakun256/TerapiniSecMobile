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
import reportData from "../utils/data/weeklyReportData";
import { useTheme } from "../utils/themeContext";

export default function WeeklyReportDetailScreen() {
  const { theme } = useTheme();
  const styles = createStyles(theme);
  const [selectedReport, setSelectedReport] = useState(null);

  const openModal = (report) => setSelectedReport(report);

  const closeModal = () => setSelectedReport(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
      <Text style={styles.cardTitle}>{item.id} Numaralı Rapor</Text>
      <Text style={styles.cardDate}>
        Tarih: {new Date(item.reportCreatedAt).toLocaleDateString("tr-TR")}
      </Text>
      <Text numberOfLines={2} style={styles.cardContent}>
        {item.content}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={reportData}
        renderItem={renderItem}
        keyExtractor={(item) => String(item.id)}
      />

      {/* Modal (Popup) */}
      <Modal
        visible={!!selectedReport}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Rapor Detayı</Text>
                <Text style={styles.modalText}>Durum: {selectedReport?.reportSituation}</Text>
                <Text style={styles.modalText}>
                  Oluşturulma Tarihi: {new Date(selectedReport?.reportCreatedAt).toLocaleString("tr-TR")}
                </Text>
                <Text style={styles.modalText}>İçerik: {selectedReport?.content}</Text>

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
    card: {
      backgroundColor: theme.accentLight,
      padding: 15,
      borderRadius: 10,
      marginBottom: 15,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.textDark,
      marginBottom: 5,
    },
    cardDate: {
      fontSize: 14,
      color: theme.textLight,
      marginBottom: 10,
    },
    cardContent: {
      fontSize: 14,
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
