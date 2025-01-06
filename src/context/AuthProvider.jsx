/*  

import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem('authUser');
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(() => {
    if (!initialAuthUser) {
      return null;
    }
    try {
      return JSON.parse(initialAuthUser);
    } catch (error) {
      console.error("Error parsing initialAuthUser:", { initialAuthUser, error });
      return null;
    }
  });

  const login = (userData) => {
    setAuthUser(userData);
    localStorage.setItem('authUser', JSON.stringify(userData));
    
    if (userData.role === 'admin') {
      navigate('/admindashboard');
    } else {
      navigate('/');
    }
  };

  const logout = () => {
    setAuthUser(null);
    localStorage.removeItem('Users');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for accessing the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
 */

import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("Users");
  const {authUser, setAuthUser} = useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);
