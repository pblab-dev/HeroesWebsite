import logo from "./assets/logo.png";
import coin from "./assets/coin.png";
import "./App.css";

function App() {
  return (
    <div className="App bg_hall">
      <div className="container">
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
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ justifyContent: "flex-end" }}
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Marketplace
                    </a>
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
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact-Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <section className="hero-invite">
          <h1 style={{ fontWeight: "bold", fontSize: 77 }} className="neon">
            PROTECT THE WORLD
          </h1>
          <span
            style={{
              fontWeight: "bold",
              fontSize: 22,
            }}
            className="span-desc"
          >
            Recruit, train and prepare your heroes for the biggest battle in the
            metaverse!
          </span>
          <p style={{ marginTop: 100 }}>
            <img
              src={coin}
              alt="coin"
              style={{ width: 55 }}
              className="coin1"
            />
            <img
              src={coin}
              alt="coin"
              style={{ width: 55 }}
              className="coin2"
            />
            <img
              src={coin}
              alt="coin"
              style={{ width: 55 }}
              className="coin3"
            />
            <img
              src={coin}
              alt="coin"
              style={{ width: 55 }}
              className="coin4"
            />
            <img
              src={coin}
              alt="coin"
              style={{ width: 99 }}
              className="coin5"
            />
          </p>
          <p style={{ marginTop: 100 }}>
            <button class="pixel-borders pixel-box--primary">Play Now!</button>
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
