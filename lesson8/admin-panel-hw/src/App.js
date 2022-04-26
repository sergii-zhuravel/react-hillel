import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AlbumsPage from "./pages/AlbumsPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={"/albums"}>Albums</Link> | <Link to={"/users"}>Users</Link>
      </div>
      <Switch>
        <Route path={"/albums"} exect>
          <AlbumsPage />
        </Route>
        <Route path={"/users"}>
          <UsersPage />
        </Route>
        <Route path={"/"}>
          <DashboardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
