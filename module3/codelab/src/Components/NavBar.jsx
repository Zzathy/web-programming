import "../Assets/css/style.css";
import ilabLogo from "../Assets/img/logo-ilab.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand custom-image" href="/">
        <img src={ilabLogo} width="75px" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a
            className="nav-link active"
            style={{ marginRight: 5 }}
            aria-current="page"
            href="/"
          >
            HOME
          </a>
          <a
            className="nav-link active"
            style={{ marginRight: 5 }}
            href="/about"
          >
            ABOUT US
          </a>
          <a className="nav-link active" href="/contact">
            CONTACT
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-dark custom-button-mr custom-button-width">
          SIGN UP
        </button>
        <button
          className="btn btn-primary custom-button-width"
          style={{ marginRight: 25 }}
        >
          LOG IN
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
