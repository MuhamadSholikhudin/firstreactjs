// import logo from './logo.svg';
// import './App.css';
// import Home from './Component/Fungsional/Home';
// import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarComp from './Component/Fungsional/NavbarComp';
import About from './Component/Fungsional/About';
import HomePage from './Component/Fungsional/HomePage';
import DetailComp from './Component/Fungsional/DetailComp';
// import Beranda from './Component/Class/Beranda';
// import BootstrapComp from './Component/Class/BootstrapComp';

function App() {
// const App = (props) => {
  return (     
  <div>

        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dashboard" component={NavbarComp} />
          <Route exact path="/detail/:id" component={DetailComp} />

        </Switch>
        </BrowserRouter>


      </div>
  );
}

export default App;
