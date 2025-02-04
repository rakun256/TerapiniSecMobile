import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faComment, faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../utils/themeContext";

export default function Navbar() {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Home")}>
        <FontAwesomeIcon icon={faHouse} size={24} style={styles.iconStyle} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Search")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={24} style={styles.iconStyle} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Chat")}>
        <FontAwesomeIcon icon={faComment} size={24} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
}

const createStyles = (theme) =>
  StyleSheet.create({
    navbar: {
      height: 60,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: theme.backgroundLight,
    },
    navItem: {
      fontSize: 16,
    },
    iconStyle: {
      color: theme.textDark,
    },
  });
