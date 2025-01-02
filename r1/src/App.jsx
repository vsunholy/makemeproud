
import './App.css';
import Bebras from './Bebras';

function Zebras() {

  const tagas = 'h4';

  return (
  <>
    {tagas === 'h2' ? <h2>Zebras</h2> : <h3>Zebras</h3>}
  </>
  
 );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React 18</h1>
        <Bebras />
        <Zebras />
      </header>
    </div>
  );
}

export default App;
