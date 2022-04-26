import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import NotFoundPage from "./pages/NotFoundPage";
import AlbumContentPage from "./pages/AlbumContentPage";
import Albums from "./components/Albums/Albums";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={"albums"}>Albums</Link> | <Link to={"users"}>Users</Link>
      </div>
      <Routes>
        <Route path="albums" element={<AlbumsPage />}>
          <Route index element={<Albums />} />
          <Route path=":albumId" element={<AlbumContentPage />} />
        </Route>
        <Route path={"users"} element={<UsersPage />} />
        <Route path={"/"} element={<DashboardPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
