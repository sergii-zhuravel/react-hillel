import Contacts from "./components/contacts/Contacts";
import ThemeProvider from "./context/ThemeProvider";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          <Link to={"/contacts"}>Contacts</Link> |{" "}
          <Link to={"/users"}>Users</Link> | <Link to={"/posts"}>Posts</Link>
        </div>
        <Switch>
          <Route path={"/contacts"} exect>
            <Contacts />
          </Route>
          <Route path={"/contacts/:id"}>
            <div>Edit contact</div>
          </Route>
          <Route path={"/users"}>
            <div>Users</div>
          </Route>
          <Route path={"/posts"}>
            <div>Posts</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
