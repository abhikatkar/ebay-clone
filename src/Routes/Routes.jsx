import { Routes,Route } from 'react-router-dom';

import { IndexPage } from '../../IndexPage';
import { Electronics } from '../components/Electronics/ElectronicsPage';
import ProductDetails from '../components/Products/ProductDetails';
import ProductPage from '../components/Products/ProductPage';
import Login from '../components/Login/Login';
import { CartPage } from '../components/Cart/CartPage';
import { PaymentPage } from '../components/Payment/Payment';

 


export const AllRoutes = ()=>{
   return <div>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route  path="/Login" element={<Login />} />
        <Route path="/cell-phones-accessories" element={<Electronics/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/product/:_id" element={<ProductDetails/>}/> 
        <Route path="/cart" element={<CartPage/>}/> 
        <Route path="/payment" element={<PaymentPage/>}/> 
      </Routes>
    </div>
}