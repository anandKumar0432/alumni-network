"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

type User = {
  id: string;
  name: string;
  imageId?: string;
  role?: string;
};

type AuthType = {
  user: User | null;
  loading: boolean;
  setUser: (u: User | null) => void;
};

axios.defaults.withCredentials = true;

const AuthContext = createContext<AuthType>({
  user: null,
  loading: true,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/me`,
          { withCredentials: true }
        );

        setUser(res.data.user);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
