import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import { SesionProvider } from './Context/SesionContext';
import Privacidad from './Components/Privacidad';
import Contactanos from './Pages/Contactanos';
import MenuDelDia from './Pages/MenuDelDia';
import Postres from './Pages/Postres';
import Carrito from './Pages/Carrito'
import Home from './Pages/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Infusiones from './Pages/Infusiones';

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
              <Route exact path="/postres" component={Postres} />
              {/* Esta lleva a la carta */}
              <Route exact path="/infusiones" component={Infusiones}/>
              {/* Esta lleva a las Infusiones */}
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
