import "./App.css";
import { GlobalStyle, Reset } from "./styles/global";
import Header from "./components/header";
import AdRegister from "./components/adRegister";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Reset />
      <Header />
      <AdRegister />
    </div>
  );
}

export default App;
