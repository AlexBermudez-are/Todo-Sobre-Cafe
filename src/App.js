import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
import Privacidad from './Components/Privacidad';
import MenuDelDia from './Pages/MenuDelDia';
import Carta from './Pages/Carta';
import Contactanos from './Pages/Contactanos';
import { CarritoProvider } from './Context/CarritoContext';
import Carrito from './Pages/Carrito';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <CarritoProvider>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={MenuDelDia} />
            <Route exact path="/privacidad" component={Privacidad} />
            <Route exact path="/carta" component={Carta} />
            <Route exact path="/carrito" component={Carrito} />
            <Route exact path="/contacto" component={Contactanos} />
          </CarritoProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
