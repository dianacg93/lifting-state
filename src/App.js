import './App.css';
import fruitList from './components/Data'
import Container from './components/Container'

function App() {
  return (
    <div className="App">
      <Container fruits={fruitList}/>
    </div>
  );
}

export default App;
