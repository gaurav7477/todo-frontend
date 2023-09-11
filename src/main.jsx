import React, { useState, createContext, useMemo } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.scss";

export const server = "https://grub-todo.onrender.com/api/v1";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const providedValue = useMemo(() => {
    return ({
      isAuthenticated,
      setIsAuthenticated,
      loading,
      setLoading,
      user,
      setUser
    })
  }, [isAuthenticated, loading, user])
  return (
    <Context.Provider
      value={providedValue}
    >
      <App />
    </Context.Provider>
  );
};
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
