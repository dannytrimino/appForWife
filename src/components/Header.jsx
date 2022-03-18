import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="www.google.com"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
        </a>
        <Navigation />
      </header>
    </div>
  );
}
export default Header;
