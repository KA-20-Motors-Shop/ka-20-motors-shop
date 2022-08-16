import "./App.css";
import { GlobalStyle, Reset } from "./styles/global";
import Header from "./components/header";
import Comments from "./components/Comments";
import Product from "./components/Product";
import MakeComment from "./components/MakeComment";
import TextField from "./components/TextArea/style";
import TextArea from "./components/TextArea";

function App() {
  return (
    <div className="App">
      <TextArea />
      <MakeComment />
      <Product />
      <GlobalStyle />
      <Reset />
      <Header />
    </div>
  );
}

export default App;
