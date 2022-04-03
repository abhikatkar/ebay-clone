import "./indexPageFooter.css";

export const IndexFooter = () => {
  return (
    <section id="indexFooter">
      <div>
        <div>
          <h3>Buy</h3>
          <a href="#">Registration</a>
          <a href="#">eBay Money Back Guarantee</a>
          <a href="#">Bidding & buying help</a>
          <a href="#">Stores</a>
        </div>
        <div>
          <h3>Sell</h3>
          <a href="#">Start selling</a>
          <a href="#">Learn to sell</a>
          <a href="#">Affiliates</a>

          <h3>Tools and Apps</h3>
          <a href="#">Developers</a>
          <a href="#">Security center</a>
          <a href="#">Site map</a>
        </div>
        <div>
          <h3>Stay Connected</h3>
          <a href="#">eBay's Blogs</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
        <div>
          <h3>About eBay</h3>
          <a href="#">Company info</a>
          <a href="#">News</a>
          <a href="#">Investors</a>
          <a href="#">Careers</a>
          <a href="#">Government relations</a>
          <a href="#">Advertise with us</a>
          <a href="#">Policies</a>
          <a href="#">Verified Rights Owner (VeRO) Program</a>
        </div>
        <div>
          <h3>Help and Contact</h3>
          <a href="#">Seller Information Center</a>
          <a href="#">Contact us</a>
          <h3>Community</h3>
          <a href="#">Announcements</a>
          <a href="#">Discussion boards</a>
          <a href="#">eBay Giving Works</a>
        </div>
      </div>
      <div className="copyrightLine">
         <span><p>Copyright © 1995-2022 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Cookies, Do not sell my personal information and AdChoice</p></span> 
         <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Norton-logo-2021.svg/2560px-Norton-logo-2021.svg.png" width={"100px"} alt="" /></span>
      </div>
    </section>
  );
};
