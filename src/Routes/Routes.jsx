import { Routes,Route } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { IndexPage } from '../../IndexPage';
import { Electronics } from '../components/Electronics/ElectronicsPage';
import ProductDetails from '../components/Products/ProductDetails';
import ProductPage from '../components/Products/ProductPage';
 


export const AllRoutes = ()=>{
   return <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/cell-phones-accessories" element={<Electronics/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/product/:_id" element={<ProductDetails/>}/> 
      </Routes>
    </div>
}