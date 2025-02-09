import { create } from "zustand";

interface AuthStore {
  user: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: localStorage.getItem("adminUser") || null,

  login: (username, password) => {
    if (username === "admin" && password === "$admin$123") {
      localStorage.setItem("adminUser", username);
      set({ user: username });
      return true;
    }
    return false;
  },

  logout: () => {
    localStorage.removeItem("adminUser");
    set({ user: null });
  },
}));
