import './App.css';
import Wellcom from './components/Wellcom';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
    <div className="AppContainer">
      <Navbar/>
      <Wellcom/>
    </div>
    </div>
  );
}

export default App;
