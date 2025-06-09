import { Routes, Route } from 'react-router-dom';
import Header from './Sections/Header';
import Account from './pages/Account';
import ByCategory from './pages/ByCategory';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Favorites from './pages/Favorites';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import ProductPage from './pages/ProductPage';
import Register from './pages/Register';
import Search from './pages/Search';
import AllProducts from './pages/AllProducts';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/bycategory/:category" element={<ByCategory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
