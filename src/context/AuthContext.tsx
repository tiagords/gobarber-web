import React, { createContext, useCallback, useState } from 'react';

import api from '../services/api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    name: string;
    email: string;
  };
  login(credencials: LoginCredentials): Promise<void>;
}

interface AuthState {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setDate] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;
    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setDate({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
