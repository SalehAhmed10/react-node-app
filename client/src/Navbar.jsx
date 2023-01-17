import React from "react";
import { Navigate } from "react-router";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <button onClick={() => Navigate("/")}> Home </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
