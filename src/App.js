import './App.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { NavBar } from './Components/Nav/Navbar'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  const greeting = "Bienvenido a CyS!"
    return (
      <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path='/'>
            <div className="App">   
              <ItemListContainer greeting={greeting} />
            </div>
          </Route>
          <Route exact path='/productos'>
            <ItemListContainer />
          </Route>
          <Route exact path='/productos/:productId'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
