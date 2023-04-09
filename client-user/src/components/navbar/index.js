import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/somethinc.svg";

export default function Navbar() {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="row">
          <img src={logo} height="30" alt="Logo Somethinc" loading="lazy" />
        </div>
        <div className="row collapse navbar-collapse" id="navbarExample01">
          <div className="col-9">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mr-5">
              <li className="nav-item active">
                <Link to={"/"} className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/products"} className="nav-link">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                {localStorage.access_token ? (
                  <a className="nav-link" onClick={handleLogout}>
                    Logout
                  </a>
                ) : (
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
