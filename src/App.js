import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import Comparepro from './pages/Comparepro';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import SignUp from './pages/SignUp';
import Resetpas from './pages/Resetpas';
import Singleblog from './pages/Singleblog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPoli from './pages/RefundPoli';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndcon from './pages/TermsAndcon';
import SingleProd from './pages/SingleProd';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product' element={<OurStore />} />
            <Route path='product/:id' element={<SingleProd />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='blogs' element={<Blog />} />
            <Route path='blog/:id' element={<Singleblog />} />
            <Route path='compare-product' element={<Comparepro />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='forgot-password' element={<Forgotpassword />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='reset-password' element={<Resetpas />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPoli />} />
            <Route path='shipping-policy' element={<ShippingPolicy />} />
            <Route path='term-conditions' element={<TermsAndcon />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
