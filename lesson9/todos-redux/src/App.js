import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <List />
    </Provider>
  );
}

export default App;
