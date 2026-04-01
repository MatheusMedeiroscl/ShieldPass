import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { AuthService } from "../services/AuthService";

interface User {
  name: string;
  email: string;
  // adicione outros campos que seu /me retorna
}

interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;        // ← tipado corretamente
  login: (token: string) => Promise<void>; // ← async = Promise
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null); // ← tipado corretamente
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const isAuthenticated = !!token;

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if(storedToken){
      AuthService.getme(storedToken).then(userData => setUser(userData))
      .catch(() => {
          // token inválido ou expirado — desloga
          localStorage.removeItem("token");
          setToken(null);       
      });
    }
  }, [])

  const login = async (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);

    const userData = await AuthService.getme(newToken);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null); // ← limpa o user ao sair
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro do AuthProvider");
  return context;
}