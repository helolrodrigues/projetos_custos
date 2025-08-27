import './App.css';
import Evento from './components/Evento';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>
      <Formulario/>
    </div>
  );
}

export default App;
