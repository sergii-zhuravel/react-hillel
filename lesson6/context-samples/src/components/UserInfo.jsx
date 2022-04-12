import { useContext } from "react";
import userContext from "../context/userContext";

export default function UserInfo({ themeContext }) {
  const { name, onLogin, onLogout } = useContext(userContext);
  const theme = useContext(themeContext);
  console.log(theme);
  return (
    <div className="App">
      {name === "" ? <h1>Access denied</h1> : <h1>Hello, {name}!</h1>}
      <button onClick={name === "" ? onLogin : onLogout}>
        {name === "" ? "Login" : "Logout"}
      </button>
    </div>
  );
}
