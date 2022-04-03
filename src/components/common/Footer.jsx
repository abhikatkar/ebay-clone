import "./Footer.css"


export const Footer = () => {
  return (
    <>
    <hr id="footerRule"/>
    <section id="footer">
      
      <div>
        <a href="#">About</a>
        <a href="#">eBayAnnouncements</a>
        <a href="#">Community</a>
        <a href="#">Security Center</a>
        <a href="#">Seller</a>
        <a href="#">Information Center</a>
        <a href="#">Policies</a>
        <a href="#">Affiliates</a>
        <a href="#">Help & Contact</a>
        <a href="#">Site Map</a>
      </div>    
      <div className="copyrightLine">
        <span>
          <p>
            Copyright © 1995-2022 eBay Inc. All Rights Reserved. Accessibility,
            User Agreement, Privacy, Cookies, Do not sell my personal
            information and AdChoice
          </p>
        </span>
        <span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Norton-logo-2021.svg/2560px-Norton-logo-2021.svg.png"
            width={"100px"}
            alt=""
          />
        </span>
      </div>
    </section>
    </>
  );
};
