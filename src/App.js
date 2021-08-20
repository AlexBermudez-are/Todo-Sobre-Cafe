import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './Pages/Home'
import './App.css';
import Privacidad from './Components/Privacidad';
import MenuDelDia from './Pages/MenuDelDia';
import Carta from './Pages/Carta';
import Contactanos from './Pages/Contactanos';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/menu" component={MenuDelDia}/>
        <Route exact path="/privacidad" component={Privacidad}/>
        <Route exact path="/carta" component={Carta}/>
        <Route exact path="/contacto" component={Contactanos} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
