import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import AlbumContentPage from "./pages/AlbumContentPage";
import Albums from "./components/Albums/Albums";
import Header from "./components/common/Header";
import { Container } from "@mui/material";

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
          <Route path={"/"} element={<DashboardPage />} />
          <Route path={"home"} element={<DashboardPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
