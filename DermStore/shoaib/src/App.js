import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import {Routes , Route} from "react-router-dom"
import { Cart } from './Components/Cart/Cart';
import { Class } from './Components/Home/Class';
import { Navbar } from './Components/Navbar/Navbar';
import { NavBottom } from './Components/Navbar/NavBottom';
import { NavAllPages } from './Components/Navbar/NavAllPages';
import { BigImage } from './Components/DivImage/BigImage';
import { QuickBuy } from './Components/Body/QuickBuy';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
     <Navbar />
     <NavAllPages />
     <QuickBuy />
    </div>
  );
}

export default App;

