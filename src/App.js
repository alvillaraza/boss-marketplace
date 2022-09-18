import Hats from './Hats'
import Wigs from './Wigs'
import Clothing from './Clothing'
import './App.css';

function App() {
  return (
    <div className="Marketplace">
      <header className="App-header">
        <Hats />
        <Clothing />
        <Wigs />
      </header>
    </div>
  );
}

export default App;
