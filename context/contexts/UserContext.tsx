"use client";

import { User } from "@/domain/user";
import { setCookie } from "cookies-next";
import { createContext, JSX, ReactNode, useContext, useState } from "react";

interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
interface UserProviderProps {
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
  initialUser: User | null;
}

const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children, initialUser }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem(`user-${userData.id}`, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setCookie("access_token", "", { path: "/" });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
