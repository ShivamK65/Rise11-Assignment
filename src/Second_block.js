import React from "react";
import "./Second_block.css";
import logo from "./hello_worldd.png";
import logo_2 from "./second_img.png";

export default function Second_block() {
  return (
    <div className="second_block">
      <div className="first">
        <div className="con_1">Welcome to our new website</div>
        <img className="first_img" src={logo} alt="img_3"/>
        <div className="con_2">
          <a href="/#" className="s_link">
            <b>LEARN ABOUT VIRGINAMARICA.COM</b>
          </a>
        </div>
      </div>

      <div className="second_">
        <div className="con2_1">Deals from $49 to your favorite cities</div>
        <img className="second_img" src={logo_2} alt="img_2" />
        <div className="con2_2">
          <a href="/#" className="s_link">
            <b>SEE ALL DEALS</b>
          </a>
        </div>
      </div>
    </div>
  );
}
