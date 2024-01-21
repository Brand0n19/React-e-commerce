import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/homeIndex';
import Footer from './components/Footer';
import ProductList from './pages/Products/Products-list/ProductsList';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductPage from './pages/Products/ProductDisplay/ProductPage';
import CartDisplay from './pages/Cart/CartDisplay';
import UserDisplay from './pages/User/UserDisplay';
import RegisterDisplay from './pages/User/RegisterDisplay';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productos' element={<ProductList peticion={"products"}/>}/>
        <Route path='/productos/:id' element={<ProductPage/>}/>
        <Route path='/productos/polo/' element={<ProductList peticion={"products?tipo=Polo"} title={"Polo"}/>}/>
        <Route path='/productos/hoddie' element={<ProductList peticion={"products?tipo=Hoddie"} title={"Hoddie"}/>} />
        <Route path='/productos/jean' element={<ProductList peticion={"products?tipo=Jean"} title={"Jean"}/>} />
        <Route path='/card' element={<CartDisplay/>}/>
        <Route path='/login' element={<UserDisplay/>}/>
        <Route path='/register' element={<RegisterDisplay/>}/>
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
