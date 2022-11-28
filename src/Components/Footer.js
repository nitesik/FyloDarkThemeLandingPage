import logo from "./Images/logo.svg";
import location from "./Images/icon-location.svg"
import phone from "./Images/icon-phone.svg"
import email from "./Images/icon-email.svg"

function Footer() {

  return (
    <footer className="footer">
      <img src={logo} className="logo" />
      <div className="footer-content">
        <div className="first-col">
          <img src={location} />
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
        </div>
        <div className="second-col">
          <div className="inner-second-col">
            <img src={phone} />
            <div>+1-543-123-4567</div>
          </div>
          <div className="inner-second-col">
            <img src={email} />
            <div>example@fylo.com</div>
          </div>
        </div>
        <div className="third-col">
          <div>About Us</div>
          <div>Jobs</div>
          <div>Press</div>
          <div>Blog</div>
        </div>
        <div className="fourth-col">
          <div>Contact Us</div>
          <div>Terms</div>
          <div>Privacy</div>
        </div>
        <div className="fifth-col">
          <img />
          <img />
          <img />
        </div>
      </div>
    </footer>
  )
}

export default Footer;