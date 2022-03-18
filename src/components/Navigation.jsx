import React from "react";

function Navigation(){
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a href="www.google.com" className="nav-link active" ariaCurrent="page">Home</a>
        </li>
      <li className="nav-item">
        <a href="www.google.com" className="nav-link">Features</a>
        </li>
      <li className="nav-item">
        <a href="www.google.com" className="nav-link">Pricing</a>
        </li>
      <li className="nav-item">
        <a href="www.google.com" className="nav-link">FAQs</a>
        </li>
      <li className="nav-item">
        <a href="www.google.com" className="nav-link">About</a>
        </li>
    </ul>
  )
}
export default Navigation;