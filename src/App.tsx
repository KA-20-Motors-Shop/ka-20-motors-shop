import "./App.css";
import { GlobalStyle, Reset } from "./styles/global";
// import Routes from "./routes";
import AdRegister from "./components/adRegister";

function App() {
  return (
    <>
      <GlobalStyle />
      <Reset />
      <AdRegister type="update" />
      {/* <div className="App">
        <Routes />
      </div> */}
    </>
  );
}

export default App;
