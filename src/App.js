import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { CarritoProvider } from './Context/CarritoContext';
import { SesionProvider } from './Context/SesionContext';
import PerfilPersonal from './Pages/PerfilPersonal';
import Privacidad from './Components/Privacidad';
import Contactanos from './Pages/Contactanos';
import 'bootstrap/dist/css/bootstrap.min.css';
import Infusiones from './Pages/Infusiones';
import MenuDelDia from './Pages/MenuDelDia';
import Postres from './Pages/Postres';
import Carrito from './Pages/Carrito'
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
              <Route path="/user/:id" component={Home} />

              <Route exact path="/menu" component={MenuDelDia} />
              <Route path="/menu/:id" component={MenuDelDia} />

              <Route exact path="/privacidad" component={Privacidad} />
              <Route path="/privacidad/:id" component={Privacidad} />

              <Route exact path="/postres" component={Postres} />
              <Route path="/postres/:id" component={Postres} />

              <Route exact path="/infusiones" component={Infusiones} />
              <Route path="/infusiones/:id" component={Infusiones} />

              <Route exact path="/carrito" component={Carrito} />
              <Route path="/carrito/:id" component={Carrito} />

              <Route exact path="/perfil/user/:id" component={PerfilPersonal} />

              <Route exact path="/contacto" component={Contactanos} />
              <Route path="/contacto/:id" component={Contactanos} />

            </SesionProvider>
          </CarritoProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
