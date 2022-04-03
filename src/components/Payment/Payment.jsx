import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
import { useNavigate } from "react-router-dom";
export const PaymentPage = () => {
    let navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div id="cartMain">
        <h1 id="cartHead">Pay by credit card</h1>
        <div id="cartMainDiv">
          <div id="cartProductsMain1">
            <form action="" id="paymentForm" onSubmit={(e)=>{
                    e.preventDefault();
                    let message = "Payment Successful \nDo you want to go to Homepage?";
                    if(confirm(message)==true){
                        navigate(`/`);
                    }
            }}>
              <label htmlFor="">Name on Card</label>
              <input type="text" required/>
              <label htmlFor="">Card Number</label>
              <input type="Number" required/>
              <label htmlFor="">CVV</label>
              <input type="Number" required/>
              <label htmlFor="">Month of Expiration</label>
              <input type="Number" required/>
              <label htmlFor="">Year of Expiration</label>
              <input type="Number" required/>
              <input type="submit"/>
            </form>
          </div>
          <div id="cartCheckout1">
            <div>
              <p>Item(1)</p>
              <p>
                US $ <span id="itemPrice">195</span>
              </p>
            </div>
            <hr />
            <div>
              <h3>Subtotal</h3>
              <h3>
                US $ <span id="subTotalPrice">195</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
          <br />
          <br />
          <br />
          <br />
      </div>
      <Footer />
    </div>
  );
};
