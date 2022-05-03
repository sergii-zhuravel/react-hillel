import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AlbumsPage from "./pages/Albums/AlbumsPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/Users/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import AlbumContentPage from "./pages/Albums/AlbumContentPage";
import Albums from "./components/Albums/Albums";
import Header from "./components/common/Header";
import { Container } from "@mui/material";
import "./App.css";
import UserCreatePage from "./pages/Users/UserCreatePage";
import UserEditPage from "./pages/Users/UserEditPage";

function App() {
  return (
    <Container maxWidth="lg">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="albums" element={<AlbumsPage />}>
            <Route index element={<Albums />} />
            <Route path=":albumId" element={<AlbumContentPage />} />
          </Route>
          <Route path={"users"} element={<UsersPage />} />
          <Route path={"users/:userId"} element={<UserEditPage />} />
          <Route path={"users/create"} element={<UserCreatePage />} />
          <Route path={"/"} element={<DashboardPage />} />
          <Route path={"home"} element={<DashboardPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
