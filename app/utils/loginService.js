import { usersData } from "./data/userData";

export const login = async (userName, password) => {
  console.log("Giriş bilgileri:", userName, password); // Debug amaçlı
  const user = usersData.find(
    (u) => u.userName === userName && u.password === password
  );

  if (!user) {
    console.log("Kullanıcı bulunamadı.");
    throw new Error("Geçersiz kullanıcı adı veya şifre");
  }

  console.log("Kullanıcı bulundu:", user); // Kullanıcı verisini yazdır
  const token = `mock-jwt-token-${user.id}`;
  return { user, token };
};
