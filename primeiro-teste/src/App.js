
import HelloWorld from "./components/HelloWorld";
import Frases from './components/Frases';
import DigaMeuNome from './components/DigaMeuNome';

function App() {
  return (
    <div className="App">
      <h1>MEU PRIMEIRO REACT</h1>
      <HelloWorld/>
      <Frases/>
      <DigaMeuNome nome="Anderson"/>
      <p>Outro paragrafo</p>
      

    </div>
  );
}

export default App;
