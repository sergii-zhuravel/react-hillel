import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppHeader from "./components/common/AppHeader";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import UserCreatePage from "./pages/UserCreatePage";
import UserEditPage from "./pages/UserEditPage";
import UsersPage from "./pages/UsersPage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppHeader />
        <Routes>
          <Route path={"users"} element={<UsersPage />} />
          <Route path={"users/create"} element={<UserCreatePage />} />
          <Route path={"users/:id"} element={<UserEditPage />} />
          <Route path={"/"} element={<DashboardPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
