import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);
  const url = "http://localhost:4000"; // Adjust according to your backend

  useEffect(() => {
    async function loadData() {
      const storedToken = localStorage.getItem("token");
      const storedAdmin = localStorage.getItem("admin") === "true";

      if (storedToken) setToken(storedToken);
      if (storedAdmin) setAdmin(true);
    }
    loadData();
  }, []);

  const contextValue = {
    token,
    setToken,
    admin,
    setAdmin,
    url,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
