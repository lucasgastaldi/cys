import './App.css';
import { ItemListContainer } from './Components/Items/ItemListContainer';
import { NavBar } from './Components/Nav/Navbar'

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