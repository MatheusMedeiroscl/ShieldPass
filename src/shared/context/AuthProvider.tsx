import React, { createContext, useContext, useState, type ReactNode } from "react";


interface AuthContextType {
  isAuthenticated: boolean;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({children}: {children: ReactNode}){

    //verifica se tem token
    const [token, setToken] = useState<string| null>(
        localStorage.getItem("token")
    );

    const isAuthenticated = !!token //true se houver token ou false se não houver


    const login = (newToken: string) => {
        localStorage.setItem("token", newToken); // salva o token no localStorage
        setToken(newToken);
    }


    const logout = () => {
        localStorage.removeItem("token"); // remove do localStorage
        setToken(null);
    };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};


 export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth deve ser usado dentro do AuthProvider");
  return context;
}