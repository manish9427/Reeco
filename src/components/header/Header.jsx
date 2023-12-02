import React from "react";
import "./Header.css"; // Import your external CSS file
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="first">
          <div>
            <i>Reeco</i>
          </div>
          <div>Store</div>&nbsp;&nbsp;
          <div>Orders</div>&nbsp;&nbsp;
          <div>Analytics</div>&nbsp;&nbsp;
        </div>
        <div className="second">
          <div>
            <FaShoppingCart />
          </div>
          <div>
            Hello, <span id="user">Manish</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
