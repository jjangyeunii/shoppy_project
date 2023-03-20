import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({ user: null, loading: true });
  const user = authState.user;
  const loading = authState.loading;

  useEffect(() => {
    onUserStateChange((user) => {
      setAuthState({ user, loading: false });
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ loading, user, uid: user && user.uid, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
