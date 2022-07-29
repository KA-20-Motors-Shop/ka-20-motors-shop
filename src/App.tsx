
import './App.css';
import { InputOne, TextField } from './styles/inputs';
import { GlobalStyle, Reset } from './styles/global';

function App() {
  return (
    <div className="App">
          <InputOne placeholder='Text'/>
          <TextField placeholder='Text' />
      <GlobalStyle/>
      <Reset/>
    </div>
  );
}

export default App;
