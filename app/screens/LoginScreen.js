import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
  StyleSheet,
  Image,
} from "react-native";
import { login as loginService } from "../utils/loginService";
import { useAuth } from "../utils/authContext";
import { useTheme } from "../utils/themeContext";

const LoginScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { login } = useAuth();
  const { theme } = useTheme();

  const handleLogin = async () => {
    try {
      console.log("Giriş yapılmaya çalışılıyor:", userName, password);
      const { user, token } = await loginService(userName, password);
  
      console.log("Bulunan kullanıcı:", user);  // Kullanıcıyı loglayalım
  
      if (!user) {
        throw new Error("Kullanıcı bulunamadı!");
      }
  
      await login(token, user);  // Kullanıcıyı `login` fonksiyonuna gönderiyoruz
      Alert.alert("Başarılı Giriş", `Hoş geldiniz, ${user.firstName}`);
    } catch (error) {
      console.error("Hata:", error);
      Alert.alert("Giriş Hatası", error.message);
    }
  };  

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundLight }]}>
      <Image source={require("../../assets/images/icon.png")} style={styles.logo} />
      <Text style={[styles.title, { color: theme.textDark }]}>Giriş Yap</Text>
      <TextInput
        style={[styles.input, { borderColor: theme.accentDark, color: theme.textDark }]}
        placeholder="Kullanıcı Adı"
        placeholderTextColor={theme.textLight}
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.accentDark, color: theme.textDark }]}
        placeholder="Şifre"
        placeholderTextColor={theme.textLight}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.switchContainer}>
        <Text style={{ color: theme.textDark }}>Beni Hatırla</Text>
        <Switch value={rememberMe} onValueChange={setRememberMe} />
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.accentDark }]}
        onPress={handleLogin}
      >
        <Text style={[styles.buttonText, { color: theme.textDark }]}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    marginTop: -230,
  },
  logo: {
    width: 230,
    height: 230,
    alignSelf: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default LoginScreen;
