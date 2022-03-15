import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const name = 'Hillel';
  return (
    <div className="App">
      <Header text="Hello" name={name} visible={true} ><span>text</span></Header>
    </div>
  );
}

export default App;
