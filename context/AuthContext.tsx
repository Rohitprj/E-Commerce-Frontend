import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function AuthContext({
  children,
}: {
  children: React.ReactNode;
}) {
  interface AuthContextProp {
    accessToken: String;
    setAccessToken: (token: string) => void;
  }

  const AuthContext = createContext<AuthContextProp>({
    accessToken: "",
    setAccessToken: () => {},
  });

  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    async function getToken() {
      try {
        const res = await axiosInstance.post("/auth/tokenRefresh");
        if (res.status === 200) {
          const data = res.data;
          setAccessToken(data.accessToken);
        }
      } catch (error) {
        console.log("Failed to get Token", error);
      }
    }
    getToken();
  }, []);
  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
}
