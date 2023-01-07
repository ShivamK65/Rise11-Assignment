import { React } from "react";
import logo from "./logo.svg.png";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      {/* <div className="menu" id="toggle-button">
        <div className="menu_line"></div>
        <div className="menu_line"></div>
        <div className="menu_line"></div>
      </div>
      <div className="header_left">
      <a href="/#"><img className="header_logo" src={logo} alt="img" />
      </a></div>
      <div className="header_left_second" id="navi_list">
        <h5><a href="#">BOOK</a></h5>
        <h5><a href="#">CHECK IN</a></h5>
        <h5><a href="#">MANAGE</a></h5> 
       
      </div>
      <div className="header_right">
        <h6><a href="#">Sign in</a></h6>
      </div> */}
      <nav className="navbar">
        <div className="menu" id="toggle-button">
          <div className="menu_line"></div>
          <div className="menu_line"></div>
          <div className="menu_line"></div>
        </div>
        <div className="container-icon">
          <a href="/#">
            {" "}
            <img className="primary_icon" src={logo} alt="img" />
          </a>
        </div>
        <ul className="nav_list" id="navi_list">
          <li className="list_item">
            <a href="/#">BOOK</a>
          </li>
          <li className="list_item">
            <a href="/#">CHECK IN</a>
          </li>
          <li className="list_item">
            <a href="/#">MANAGE</a>
          </li>
        </ul>
        <div className="multi_content">
          <a href="/#"><small className="multi_cont">Deals</small></a>
          <a href="/#"><small className="multi_cont">Flying With Us</small></a>
          <a href="/#"><small className="multi_cont">Where We Fly</small></a>
          <a href="/#"><small className="multi_cont">Shop</small></a>
          <a href="/#"><small className="multi_cont">FAQ</small></a>
          <a href="/#"><small className="multi_cont">Fees</small></a>
        </div>
        <div className="right_con">
          <div className="elevate" id="r_c">
          <a href="/#"><large>elevate</large></a>
          </div>
          <div className="signin" id="r_c">
          <a href="/#"><small>Sign In</small></a>
          </div>
          <div className="signup" id="r_c">
          <a href="/#"><small>Sign Up</small></a>
          </div>
        </div>
      </nav>
    </div>
  );
}
const toggleButton = document.getElementById("toggle-button");
const navList = document.getElementById("navi_list");
toggleButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});
