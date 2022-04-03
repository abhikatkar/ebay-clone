import { Footer } from "../common/Footer";
import "./ElectronicsPage.css";
import { Link } from "react-router-dom";
import { Navbar } from '../common/Navbar';
export const Electronics = () => {
  return (
    <>
    <Navbar/>
    <div>
      <section id="ElectronicsMain">
        <div className="sideMenu">
          <h3>Shop by Category</h3>
          <a href="#">Cell Phones & Smartphone Parts</a>
          <a href="#">Cell Phones and Accessories</a>
          <a href="#">Cell Phones and Smartphones</a>
          <a href="#">Display Phones</a>
          <a href="#">Mixed Lots</a>
          <a href="#">PDA Accessories</a>
          <a href="#">PDAs</a>
          <a href="#">Smart Watches</a>
        </div>
        <div id="phoneAccessories">
          <div>
            <Link to={"/products"}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/31EAAOSw-BJfsl4m/s-l225.webp"
                alt=""
              />
              <h4>Cell Phones and Smartphones</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/XY0AAOSwBL9fsl4p/s-l225.webp"
                alt=""
              />
              <h4>Cases, Covers and Skins</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/tKUAAOSwgEJfsl4v/s-l225.webp"
                alt=""
              />
              <h4>Chargers</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/XZsAAOSwBL9fsl4z/s-l225.webp"
                alt=""
              />
              <h4>Screen Protector</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/5QIAAOSwwkZfsl43/s-l225.webp"
                alt=""
              />
              <h4>Mounts</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/AHAAAOSwdpRfsl4-/s-l225.webp"
                alt=""
              />
              <h4>Smart Watches</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/BUYAAOSwW~hfsl5C/s-l225.webp"
                alt=""
              />
              <h4>Watch Accessories</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/zGYAAOSw-IRfsl5G/s-l225.webp"
                alt=""
              />
              <h4>Headsets</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/vBgAAOSw9-9fsl5K/s-l225.webp"
                alt=""
              />
              <h4>Vintage Cell Phones</h4>
            </Link>
            <Link to={""}>
              <img
                src="https://i.ebayimg.com/thumbs/images/g/yTsAAOSw1eZfsl5O/s-l225.webp"
                alt=""
              />
              <h4>Other Cell Phones Accessories</h4>
            </Link>
          </div>
          <div>
            <h2>Cellphones and Smartwatches Offer the Gift of Convenience</h2>
            <p>
              There are so many types of cellphones and smartphones now
              available. On eBay, you'll find products made by brands like
              Apple, Samsung, and LG. eBay carries phones from major cellular
              carriers like Verizon, Sprint, and AT&T, in addition to unlocked
              cellphones.
            </p>
            <h3>What types of cellphones are there?</h3>
            <p>Smartphones can do so much these days. It's like carrying a personal computer in your pocket. Whether you have to make a call, look up information, attend a virtual meeting, or get some shopping done, you can do so easily with the help of your cellphone. There are new releases as well as some older models of the iPhone, Galaxy, and other types of phones.</p>
            <p>It may be important to think about budget when browsing the collection on eBay. Generally speaking, more storage equates to a higher price. Consider how much data you'll want to keep on your phone and how much you might be able to store on the cloud. Manufacturer-refurbished phones may be offered for good deals, and in many cases, they come with warranties.</p>
            <h3>Accessories</h3>
            <p>Don't forget to accessorize! On eBay, you'll find a variety of mobile phone accessories, including:</p>
            <ul>
                <li>Cases</li>
                <li>Screen protectors</li>
                <li>Chargers</li>
                <li>Headsets, earbuds, and AirPods</li>
                <li>Replacement screens</li>
            </ul>
            <h3>What kind of smartwatches are available?</h3>
            <p>A smartwatch can be a great addition to your technology lineup. They can give you access to certain apps, track physical activity, play music, make calls, and more. There are so many types of smartwatches on eBay. Some are oriented toward athletes while others look sleek and sophisticated. You can change out the watch band if you'd like to go for a different style. eBay has watches made by many companies, such as:</p>
            <ul>
                <li>Garmin</li>
                <li>Apple</li>
                <li>Samsung</li>
            </ul>
            <p>In addition, there are plenty of smartwatch accessories such as docking stations and screen protectors to ensure you can protect your smartwatch at all times.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};
