import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TodosPage from "./pages/Todos";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path={"*"} element={<TodosPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
