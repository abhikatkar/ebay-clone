import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { Link } from "react-router-dom";
import "./CartPage.css";
export const CartPage = () => {
  return (
    <div>
      <Navbar />
      <div id="cartMain">
        <h1 id="cartHead">Shopping Cart (1 Item)</h1>
        <div id="cartMainDiv">
          <div id="cartProductsMain">
            <div>
              <img
                src="https://i.ebayimg.com/images/g/Y-8AAOSwUjtiOkI4/s-l400.jpg"
                height={"100%"}
                alt=""
              />
            </div>
            <div>
              {" "}
              <p>
                Apple iPhone SE 2020 (2nd Generation) 64GB GSM Unlocked Black
              </p>{" "}
            </div>
            <div>
                <select name="" id="noOfProducts" onChange={(e)=>{
                    e.preventDefault();
                    let productsNumber = document.getElementById("noOfProducts").value
                    document.getElementById("particularPrice").innerText = 195*productsNumber;
                    document.getElementById("itemPrice").innerText = 195*productsNumber;
                    document.getElementById("subTotalPrice").innerText = 195*productsNumber;
                    localStorage.setItem("TotalCartValue",JSON.stringify(productsNumber*195));
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                <p>US $ <span id="particularPrice">195</span></p>
               
            </div>
          </div>
          <div id="cartCheckout">
              <Link to="/payment"><button>Go to checkout</button></Link>
              <div>
                  <p>Item(1)</p>
                  <p>US $ <span id="itemPrice">195</span></p>
              </div>
              <hr />
              <div>
                  <h3>Subtotal</h3>
                  <h3>US $ <span id="subTotalPrice">195</span></h3>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
