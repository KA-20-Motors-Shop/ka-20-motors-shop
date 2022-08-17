import "./App.css";
import { GlobalStyle, Reset } from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Reset />
      <div className="App">
        <Routes />
      </div>
    </>
  );
}

export default App;
