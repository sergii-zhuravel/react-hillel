import { Provider } from "react-redux";
import "./App.css";
import List from "./components/ListContainer";
import Form from "./components/Form";
import store from "./store/store";
import Container from "@mui/material/Container";

function App() {
  return (
    <Container maxWidth="md">
      <Provider store={store}>
        <List />
        <Form />
      </Provider>
    </Container>
  );
}

export default App;
