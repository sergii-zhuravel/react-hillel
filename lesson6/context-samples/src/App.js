import "./App.css";
import UserInfo from "./components/UserInfo";
import { UserProvider } from "./context/userContext";
import { themeContext } from "./context/themeContext";

function App() {
  return (
    <themeContext.Provider value="light">
      <UserProvider>
        <UserInfo />
      </UserProvider>
    </themeContext.Provider>
  );
}

export default App;
