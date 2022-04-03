import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./product.css";

function ProductDetails() {
  const [oneProduct, setoneProduct] = useState({});
  const params = useParams();
  const { _id } = params;

  useEffect(() => {
    axios.get(`https://ebay-project3.herokuapp.com/data/${_id}`).then((res) => {
      //   console.log(res.data);
      setoneProduct({ ...res.data });
    });
  }, []);

  console.log(oneProduct);
  return (
    <div>
      <div className="product_detail_div">
        <div className="left_productDetail">
          <img className="left_img" src={oneProduct.img1} alt="" />
        </div>
        <div className="right_productDetail">
          <h3 className="lessbold">{oneProduct.title}</h3>
          <h4 className="morelessbold">
            SAME DAY SHIPPING - NEW FAST CHARGER - 1 YEAR WARRANTY
          </h4>
          <p>
            Condition:
            <p>Very Good - RefurbishedVery Good - Refurbished</p>
            “We're a Samsung Certified USA Seller. Prism Black 128GB Samsung
            Galaxy S10 G973U - Unlocked - In ”... Read more{" "}
          </p>
          <h3>Price: ${oneProduct.price}</h3>
          <h5>Shipping Price: ${oneProduct.shipping_price}</h5>
          <button className="addtocart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
