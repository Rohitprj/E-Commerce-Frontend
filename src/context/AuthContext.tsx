"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import axiosInstance, { BASE_URL } from "../../utils/axiosInstance";
import axios from "axios";

interface AuthContextProp {
  accessToken: string;
  setAccessToken: (token: string) => void;
  user: {
    email: string;
    isLoggedIn: boolean;
    isLoading: boolean;
  };
  setUser: React.Dispatch<
    React.SetStateAction<{
      email: string;
      isLoggedIn: boolean;
      isLoading: boolean;
    }>
  >;
  products?: any; // Add the 'products' property with an optional type
}

export const AuthContext = createContext<AuthContextProp>({
  accessToken: "",
  setAccessToken: () => {},
  user: {
    email: "",
    isLoggedIn: false,
    isLoading: true,
  },
  setUser: () => {},
  products: [],
});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [accessToken, setAccessToken] = useState("");
  const [user, setUser] = useState({
    email: "",
    isLoggedIn: false,
    isLoading: true,
  });
  const [products, setProducts] = useState([]);

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

    (async function () {
      try {
        const { data } = await axios.get(`${BASE_URL}/auth/is_loggedin`, {
          withCredentials: true,
        });
        const userData = await data;
        if (userData.is_loggedin) {
          setUser((e) => ({
            ...e,
            isLoggedIn: true,
            email: userData.data.email,
          }));
        }
      } catch (error) {
        console.log({ error });
      } finally {
        setUser((e) => ({ ...e, isLoading: false }));
      }
    })();

    async function productsData() {
      const { data } = await axiosInstance.get("/product/products");
      console.log("Products data", data);
      setProducts(data);
    }
    productsData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, user, setUser, products }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  return useContext(AuthContext);
};
