import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Home from "./Home";
import Cart from "./Cart";
import Sports from "./Sports";
import Report from "./Report";

function App() {
  const [user, setUser] = useState(null); 

  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-xxl">
          <Link to="/" className="navbar-brand fw-semibold fs-4">
            <i className="bi bi-bag-check-fill"></i>BuyHive
          </Link>
    
           <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navmenu" className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/cart" className="nav-link">Cart</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>

              <li className="nav-item">
                {user ? (
                  <span className="nav-link text-light">
                     {user}
                  </span>
                ) : (
                  <Link to="/login" className="nav-link">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<Report />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </>
  );
}

export default App;
