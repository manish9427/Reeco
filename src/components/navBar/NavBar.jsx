import React from "react";
import "./NavBar.css";

const RightArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      width="10"
      height="10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 5h8M8 5l-4-4M8 5l-4 4" />
    </svg>
  );
};

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="sub">
        <div>Orders</div>&nbsp;
        <div>
          <RightArrowIcon />
        </div>
        &nbsp;
        <div>Order 32457ABC</div>
      </div>
      <div className="detail">
        <div>
          <h1>Order 32457ABC</h1>
        </div>
        <div>
          <button className="first-button">Back</button>&nbsp;&nbsp;&nbsp;
          <button className="second-button">Approved Order</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
