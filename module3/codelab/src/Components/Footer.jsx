import "../Assets/css/style.css";
import ilabLogo from "../Assets/img/logo-ilab.png";
import facebookLogo from "../Assets/img/logo-facebook.png";
import twitterLogo from "../Assets/img/logo-twitter.png";
import instagramLogo from "../Assets/img/logo-instagram.png";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="row footer-wrapper">
        <div className="col-md-6 col-xs-12 d-flex justify-content-center p-5">
          <img src={ilabLogo} width="200px" height="100px" alt="" />
        </div>
        <div className="col-md-2 col-xs-12 justify-content-center">
          <p className="text-secondary">Services</p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              Email Marketing
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              Campaigns
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              Branding
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              Offline
            </a>
          </p>
        </div>
        <div className="col-md-2 col-xs-12 justify-content-center">
          <p className="text-secondary">About</p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              Our Story
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              Benefits
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              Team
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              Careers
            </a>
          </p>
        </div>
        <div className="col-md-2 col-xs-12 justify-content-center">
          <p className="text-secondary">Follow Us</p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              <img
                src={facebookLogo}
                width="10px"
                style={{ marginRight: 10 }}
                alt=""
              />
              Facebook
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              <img
                src={twitterLogo}
                width="16px"
                style={{ marginRight: 5 }}
                alt=""
              />
              Twitter
            </a>
          </p>
          <p>
            <a
              href=""
              className="text-black link-underline link-underline-opacity-0"
            >
              <img
                src={instagramLogo}
                width="15px"
                style={{ marginRight: 8 }}
                alt=""
              />
              Instagram
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-xs-12 d-flex justify-content-center">
          <p className="text-secondary">Copyright © 2022 Infinite Learning</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
