import { Routes,Route } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { IndexPage } from '../../IndexPage';
import { Electronics } from '../components/Electronics/ElectronicsPage';


export const AllRoutes = ()=>{
   return <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/cell-phones-accessories" element={<Electronics/>}/>
      </Routes>
    </div>
}