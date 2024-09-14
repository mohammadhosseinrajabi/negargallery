import React from "react";
import Rightcontent from "./rightcontent";
import Leftcontent from "./leftcontent";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-dark bg-secondary top_navbar py-0">
      <div className="container-fluid h-100 pe-0">
        <Rightcontent/>

         <Leftcontent/>
      </div>
    </nav>
  );
};
export default Navbar;
