import './App.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { NavBar } from './Components/NavBar/Navbar'

function App() {
  const greeting = "Bienvenido a CyS!"
    return (
      <div className="App">
        <NavBar />
        <ItemListContainer greeting={greeting} />
      </div>
  );
}

export default App;