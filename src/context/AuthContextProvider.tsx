import React, { createContext, useEffect, useState } from 'react';
import { User } from './context';
import { AuthContext } from './context';


const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [user, setUser] = useState<User | undefined>();

  const login = (jwtToken: string | undefined, user: User | undefined ) => {
    setToken(jwtToken);
    setUser(user)
    localStorage.setItem('token', jwtToken);
    localStorage.setItem('user',JSON.stringify(user));
  };

  const logout = () => {
    setToken(null);
    setUser(null)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    // Check if a token exists in localStorage on app initialization
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken) {
      setToken(storedToken);
      if (storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

