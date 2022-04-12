import { createContext, useState } from "react";

const userContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  function onLogin() {
    setName("John Doe");
  }
  function onLogout() {
    setName("");
  }
  const user = {
    name,
    onLogin,
    onLogout,
  };
  return <userContext.Provider value={user}> {children}</userContext.Provider>;
};

export default userContext;
