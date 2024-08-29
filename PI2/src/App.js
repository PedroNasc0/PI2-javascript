import Header from './components/Header';
import './App.css';
import Menu from './components/Menu';
import Tarefas from './components/Tarefas';
import Corinthians from './components/Corinthians';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Corinthians/>
      <Menu/>
      <Tarefas/>
      
    </div>
  );
}

export default App;
