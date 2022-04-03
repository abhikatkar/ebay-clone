import { useContext } from "react";
import { Link } from "react-router-dom";
import { User } from "../../App";
import "./Navbar.css";
import {
  getAuth,
  
  signOut,

  
} from 'firebase/auth';


export const Navbar = () => {
  const a = useContext(User)
  const auth = getAuth();

  const signout =()=>{
    auth.signOut()
    alert("signout")
     a.Update(null)
    
  }
 
  return (
    <section id="Navbar">
      {/* Top Bar of the Navbar */}
      <div id="navabarTop">
        <div id="navabarTopLeft">
          <div>
            Hi!{" "}
            <span>
              
            <Link to={"/Login"}>{a.user?a.user:"Signin"}</Link>
            </span>

            
           
            
          </div>
          <div>Daily Deals</div>
          <div>Help & Contact</div>
        </div>
        <div id="navabarTopRight">
          <div>Sell</div>
          <div>WatchList ▼</div>
          <div>My eBay ▼</div>
          <div> <span className="material-icons-outlined">notifications</span></div>
          <div><Link to="/cart"><span className="material-icons-outlined">shopping_cart</span></Link> </div>
          
          
          { a.user ?<button className="logout-btn"
          onClick={signout}
          >SignOut</button>:""}
        </div>
      </div>
      <hr />
      {/* Section Containing Logo & SearchBox */}
      <div id="navSearchBar">
        <div id="searchbarLogo">
          <Link to="/"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/640px-EBay_logo.svg.png"
            alt="Ebay Logo"
            height="120%"
            width="120px"
          /></Link>
          
        </div>
        <div id="categorySelection">
          <div>
            <p>
              Shop by <br />
              category
            </p>
          </div>
          <div>
            <p>▼</p>
          </div>
        </div>
        <div id="searchBar">
          <div id="searchIcon">
            <p>{"\u2315"}</p>
          </div>
          <div>
            <input type="text" placeholder="Search for anything" />
          </div>
          <div>
            <select name="" id="">
              <option>All Category</option>
              <option>Antiques</option>
              <option>Art</option>
              <option>Baby</option>
              <option>Books</option>
              <option>Business & Industrial</option>
              <option>Cameras & Photo</option>
              <option>Cell Phones & Accessories</option>
              <option>Coins & Paper Money</option>
              <option>Collectibles</option>
              <option>Computers/Tablets & Networking</option>
              <option>Consumer Electronics</option>
              <option>Crafts</option>
              <option>Dolls & Bears</option>
              <option>DVDs & Movies</option>
              <option>eBay Motors</option>
              <option>Entertainment & Memorabillia</option>
              <option>Gift Cards & Coupons</option>
              <option>Health & Beauty</option>
              <option>Home & Garden</option>
              <option>Jewelry & Watches</option>
              <option>Music</option>
              <option>Music</option>
              <option>Musical Instruments & Gear</option>
              <option>Pet Supplies</option>
              <option>Pottery & Glass</option>
              <option>Real State</option>
              <option>Specialty Services</option>
              <option>Sporting Goods</option>
              <option>Sports Mem, Cards & Fan Shop</option>
              <option>Stamps</option>
              <option>Tickets & Experiences</option>
              <option>Toys & Hobbies</option>
              <option>Travel</option>
              <option>Video Games & Consoles</option>
              <option>Everything Else</option>
            </select>
          </div>
        </div>
        <div id="searchButton">
          <button>Search</button>
        </div>
        <div id="advancedSearch">
          <p>Advanced</p>
        </div>
      </div>

      <div id="navDropdowns">
        <div>
        <span>Home</span>
        <span>Electronics</span>
        <span>Fashion</span>
        <span>Health & Beauty</span>
        <span>Home & Garden</span>
        <span>Sports</span>
        <span>Collectibles and art</span>
        <span>Industrial equipment</span>
        <span>Motors</span>
        <span>Deals</span>
        <span>Sell</span>
        </div>
        <div id="dropdownMenuContent">
          <div>
            <h4>Most Popular Categories</h4>
            <hr />
            <Link to="/cell-phones-accessories">Cell phones and accessories</Link>
            <a href="#">Computer</a>
            <a href="#">Camera</a>
            <a href="#">Printers</a>
            <a href="#">Drones</a>
          </div>
          <div>
            <h4>More Categories</h4>
            <hr />
            <a href="#">Apple</a>
            <a href="#">Samsung</a>
            <a href="#">Xiaomi</a>
            <a href="#">Deals</a>
            <a href="#">Sell on eBay</a>
          </div>
          <div id="dropdownImage">
            <img
              src="https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19392.jpeg"
              alt=""
            />
          </div>
        </div>
       
      </div>
    </section>
  );
};


