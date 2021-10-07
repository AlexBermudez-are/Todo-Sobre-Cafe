import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import { SesionProvider } from './Context/SesionContext';
import Privacidad from './Components/Privacidad';
import Contactanos from './Pages/Contactanos';
import MenuDelDia from './Pages/MenuDelDia';
import Carrito from './Pages/Carrito';
import Carta from './Pages/Carta';
import Home from './Pages/Home'
import './App.css';

// Aqui van las rutas a las paginas Principales

function App() {
  return (
    <>
      <Router>
        <Switch>
          <CarritoProvider>
            <SesionProvider>
              <Route exact path="/" component={Home} />
              {/* Esta va a home */}
              <Route exact path="/menu" component={MenuDelDia} />
              {/* Esta va al menú del día */}
              <Route exact path="/privacidad" component={Privacidad} />
              {/* Esta lleva a la pagina de privacidad */}
              <Route exact path="/carta" component={Carta} />
              {/* Esta lleva a la carta */}
              <Route exact path="/carrito" component={Carrito} />
              {/* Esta al carrito principal */}
              <Route exact path="/contacto" component={Contactanos} />
              {/* Al menú de contacto */}
            </SesionProvider>
          </CarritoProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
