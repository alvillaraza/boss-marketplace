import Hats from './Hats/Hats'
import Wigs from './Wigs/Wigs'
import Clothing from './Clothing/Clothing'
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
