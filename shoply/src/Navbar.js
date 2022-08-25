import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { calculateTotalQuantity } from "./helpers";
import './Item.css';

function Navbar() {
  const itemCount = useSelector(st => calculateTotalQuantity(st.cartItems));
  const cartValue = useSelector(st => st.cartValue);
  const itemUnit = itemCount === 1 ? "item" : "items";
  return (
    <nav className="navbar navbar-light bg-info">
      <div className="container">
        <Link to="/" className="navbar-brand text-light">
          SHOPLY!
        </Link>
        <ul className="navbar-nav flex-row">
          <li className="nav-item shopping-cart">
            <span className="navbar-text text-light">
              {itemCount} {itemUnit} (${cartValue})
            </span>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-link text-light">
              See Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
