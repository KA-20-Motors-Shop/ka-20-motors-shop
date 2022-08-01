
import './App.css';
import { InputOne, TextField } from './styles/inputs';
import { GlobalStyle, Reset } from './styles/global';
import Header from "./components/header";


function App() {
  return (
    <div className="App">
          <InputOne placeholder='Text'/>
          <TextField placeholder='Text' />

      <GlobalStyle/>
      <Reset/>

      <Header />

    </div>
  );
}

export default App;
