import logo from "./assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function Layout() {
  return (
    <div className="container-fluid App">
      <header className="my-header">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className="logo-img" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
              style={{ justifyContent: "flex-end", marginRight: 50 }}
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="marketplace" className="nav-link">
                    Marketplace
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    News
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Telegram Channel
                    </a>
                    <a className="dropdown-item" href="#">
                      Discord
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Twitter
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tokenomics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    RoadMap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Whitepaper
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="#">
                    Contact-Us
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
