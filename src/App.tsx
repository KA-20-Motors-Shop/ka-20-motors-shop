import "./App.css";
import { GlobalStyle, Reset } from "./styles/global";
import Header from "./components/header";
import Comments from "./components/Comments";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Product />
      <GlobalStyle />
      <Reset />
      <Header />
    </div>
  );
}

export default App;
