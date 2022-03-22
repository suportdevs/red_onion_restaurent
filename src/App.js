import './App.css';
import Home from './components/Home/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import Store from './components/Store/Store';
import FoodDetails from './components/FoodDetails/FoodDetails';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Delivery from './components/Delivery/Delivery';
import Register from './components/Login/Register';
import RedirectAuth from './components/RedirectAuth/RedirectAuth';

export const CartContext = createContext();
export const UserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [loggeduser, setLoggedUser] = useState([]);
  // console.log(cart);
  return (
    <UserContext.Provider value={[loggeduser, setLoggedUser]}>
    <CartContext.Provider value={[cart, setCart]}>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path=":breakfast" element={<Store />} />
        <Route path=":lunch" element={<Store />} />
        <Route path=":dinner" element={<Store />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={
                              <RedirectAuth>
                                <PlaceOrder />
                              </RedirectAuth>
                            } />
      <Route path="/delivery" element={<Delivery/>} />
      <Route path="food-details/:key" element={<FoodDetails />} />
    </Routes>
    </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
