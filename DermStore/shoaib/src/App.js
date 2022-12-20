import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import {Routes , Route} from "react-router-dom"
import { Cart } from './Components/pages/Cart';
import { Class } from './Components/Home/Class';
import { Navbar } from './Components/Navbar/Navbar';
import { NavBottom } from './Components/Navbar/NavBottom';
import { NavAllPages } from './Components/Navbar/NavAllPages';
import { BigImage } from './Components/DivImage/BigImage';
import { QuickBuy } from './Components/Body/QuickBuy';
import { ModalFooter } from '@chakra-ui/react';
import Footer from './Components/Footer/Footer';
import { LogIn } from './Components/pages/LogIn';
import { SuperShop } from './Components/pages/SuperShop';

function App() {
  return (
    <div className="App">
    
     <Routes>
       <Route path="/" element={<Home />}> </Route>
       <Route  path="/cart" element={<Cart />}> </Route>
       <Route  path="/login" element={<LogIn />}> </Route>
       <Route  path="/supershop" element={<SuperShop />}> </Route>
       <Route  path="/home/supershop" element={<SuperShop />}> </Route>
       <Route  path="/home/cart" element={<Cart />}> </Route>
       <Route  path="/home/supershop/cart" element={<Cart />}> </Route>
       <Route  path="/supershop/cart" element={<Cart />}> </Route>
       <Route  path="/:userId" element={<Cart />}> </Route>
     </Routes >
  
    </div>
  );
}

export default App;

