import { IndexCarousel } from "./src/components/Home/IndexPageCarousel";
import { IndexFooter } from "./src/components/Home/IndexPageFooter";
import { Navbar } from './src/components/common/Navbar';

export const IndexPage =()=>{
    return(
    <>
    <Navbar/>
    <div>
    <IndexCarousel/>
    <hr />
    <IndexFooter/>
    </div>
    </>
    )
}