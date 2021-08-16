import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../css/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav">
        <div>
          <Link to="/">
            <Button>Puppies</Button>
          </Link>
        </div>
        <div>
          <Link to="/calculator">
            <Button>Food Calculator</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
