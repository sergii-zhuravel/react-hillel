import { createContext } from "react";
import "./App.css";
import UserInfo from "./components/UserInfo";
import { UserProvider } from "./context/userContext";

const themeContext = createContext("light");

function App() {
  return (
    <themeContext.Provider value="light">
      <UserProvider>
        <UserInfo themeContext={themeContext} />
      </UserProvider>
    </themeContext.Provider>
  );
}

export default App;
