import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import React, { useState } from 'react';
import NotFound from './Pages/Shared/NotFound/NotFound';
import CheckOut from './Pages/Cart/CheckOut';
import Login from './Pages/Login/Login';
import Regester from './Pages/Login/Regester';
import RequerAuth from './Pages/RequerAuth/RequerAuth';
import Blog from './Pages/Blog/Blog';
import BuyService from './Pages/BuyService/BuyService';

export const cartContext = React.createContext([]);

function App() {

  const [cart, setCart] = useState([]);

  const handleAddToCart3 = (props) => {
    const exist = cart;
    const newCart = [...exist, props]
    setCart(newCart)
  }

  return (
    <div>
      <cartContext.Provider value={cart}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home handleAddToCart3={handleAddToCart3}></Home>}></Route>
          <Route path='/home' element={<Home handleAddToCart3={handleAddToCart3}></Home>}></Route>
          <Route path='/service/:serviceId' element={
            <RequerAuth>
              <BuyService></BuyService>
            </RequerAuth>
          }></Route>
          <Route path='/shopincart/:serviceId' element={
            <RequerAuth>
              <BuyService></BuyService>
            </RequerAuth>
          }></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/shopincart' element={<Cart></Cart>}></Route>
          <Route path='/checkout' element={
            <RequerAuth>
              <CheckOut></CheckOut>
            </RequerAuth>
          }></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Regester></Regester>}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </cartContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
