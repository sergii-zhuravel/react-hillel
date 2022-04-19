import Contacts from "./components/contacts/Contacts";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Contacts />
    </ThemeProvider>
  );
}

export default App;
