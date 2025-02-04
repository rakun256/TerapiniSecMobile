import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null); // Kullanıcı verisi

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem("userToken");
      const savedUserData = await AsyncStorage.getItem("userData");

      if (token && savedUserData) {
        setUserData(JSON.parse(savedUserData));
        setIsAuthenticated(true);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (token, user) => {
    if (!user) {
      console.log("Kullanıcı boş hatası");  // Debug amacıyla eklendi
      throw new Error("Kullanıcı verisi boş!");
    }
  
    console.log("Kullanıcı kaydediliyor:", user);  // Debug logu
  
    await AsyncStorage.setItem("userToken", token);
    await AsyncStorage.setItem("userData", JSON.stringify(user));
    setUserData(user);
    setIsAuthenticated(true);
  };
  
  
  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userData");
    setIsAuthenticated(false);
    setUserData(null);
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
