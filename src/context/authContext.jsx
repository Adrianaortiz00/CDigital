import { createContext, useContext } from "react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [userId, setUserId] = useState(() => localStorage.getItem("loggedInUserId"));
  const [userRole, setUserRole] = useState(() => {
    const role = localStorage.getItem("userRole");
    return role ? JSON.parse(role) : [];
  });

  useEffect(() => {
    if (userId && token) {
      localStorage.setItem("loggedInUserId", userId);
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", JSON.stringify(userRole));
    }
  }, [userId, token, userRole]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUserId");
    localStorage.removeItem("userRole");
    setToken(undefined);
    setUserId(undefined);
    setUserRole([]);
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, userId, setUserId, userRole, setUserRole, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
