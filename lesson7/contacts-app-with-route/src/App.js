import Contacts from "./components/contacts/Contacts";
import ThemeProvider from "./context/ThemeProvider";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <Link to={"/contacts"}>Contacts</Link> |{" "}
          <Link to={"/users"}>Users</Link> | <Link to={"/posts"}>Posts</Link>
        </div>
        <Routes>
          <Route path="contacts" element={<Contacts />} />
          <Route path="contacts/:id" element={<div>Edit contact</div>} />
          <Route path="users" element={<div>Users</div>} />
          <Route path="posts" element={<div>Posts</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
