import "./App.css";

import { GlobalStyle, Reset } from "./styles/global";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Reset />
      <Header />
    </div>
  );
}

export default App;
