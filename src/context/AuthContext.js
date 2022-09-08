import { useState } from "react";
import { createContext } from "react";
import axios from "../axios";
export const AuthContext = createContext();

const initialState = {
  currentUser: null,
};
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(initialState);
  const login = async ({ email, password }) => {
    // configure header's Content-Type as JSON
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const user = await axios.post("/auth/login", { email, password }, config);
    // store user's token in local storage
    localStorage.setItem("userToken", user.data.token);
    setCurrentUser(user.data);
  };
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
