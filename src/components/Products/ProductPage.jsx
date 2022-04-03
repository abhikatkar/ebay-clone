import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";
import { Footer } from "../common/Footer";
import { Navbar } from "../common/Navbar";
function ProductPage() {
  //  defining a state
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://ebay-project3.herokuapp.com/data").then((res) => {
      console.log(res.data);
      setProducts([...res.data]);
    });
  }, []);

  const handleSort = (value) => {
    let demo;
    // let demo = products.sort((a, b) => {
    //   return a.price - b.price;
    // });

    if (value === 1) {
      demo = products.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (value === 2) {
      demo = products.sort((a, b) => {
        return b.price - a.price;
      });
    } else if (value === 3) {
      demo = products.sort((a, b) => {
        return b.star - a.star;
      });
    } else if (value === 4) {
      demo = products.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (value === 5) {
      demo = products.sort((a, b) => {
        if (a.title < b.title) {
          return 1;
        } else {
          return -1;
        }
      });
    }

    setProducts([...demo]);
  };

  return (
    <>
    <Navbar/>
    <div>
      <h1>Featured Products</h1>
      <div className="sortingDiv">
        <button
          className="button_distance"
          onClick={() => {
            handleSort(1);
          }}
        >
          Lowest Price{" "}
        </button>
        <button
          className="button_distance"
          onClick={() => {
            handleSort(2);
          }}
        >
          Highest Price
        </button>
        <button
          className="button_distance"
          onClick={() => {
            handleSort(3);
          }}
        >
          Highest Rated
        </button>
        <button
          className="button_distance"
          onClick={() => {
            handleSort(4);
          }}
        >
          Title ASC
        </button>
        <button
          className="button_distance"
          onClick={() => {
            handleSort(5);
          }}
        >
          Title DEC
        </button>
      </div>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/product/${product._id}`}>
              <img src={product.img1} alt={product.name} />
            </Link>
            <div className="product-info">
              {/* <Link to={`/product/${product.id}`}> */}
              <p>
                <strong>{product.title}</strong>
              </p>
              {/* </Link> */}
              <p className="yeloowColor">
                <bold>{`Ratings-${product.star}/5`}</bold>
              </p>
              <p>
                <strong>${product.price}</strong>
              </p>
              <p>
                {"ShippingCharge      "}
                <strong>${product.shipping_price}</strong>
              </p>
              {/* <button>Add to cart</button> */}
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
export default ProductPage;
