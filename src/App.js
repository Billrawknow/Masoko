
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/Shop';

import LoginSignup from './Pages/Shop';
import Product from './Pages/Shop';
import Cart from './Pages/Shop';


function App() {
  return (
    <div >
      <BrowserRouter>
      
     <Navbar/>
     <Routes>
      <Route path='/' element ={<Shop/>}/>
      <Route path='/men' element ={<ShopCategory category = "men" />}/>
      <Route path='/women' element ={<ShopCategory category = "women"/>}/>
      <Route path='/kids' element ={<ShopCategory category = "kids"/>}/>
      <Route path="/product" element = {<Product/>}>
      <Route path=':productID'element = {<Product/>}/>
      </Route>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/login' element ={<LoginSignup/>}/>
     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;
