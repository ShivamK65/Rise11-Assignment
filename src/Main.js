import React from "react";
import "./main.css";
import Block from "./Block.js";
import Second_block from "./Second_block";

export default function Main() {
  return (
    <div className="main">
      <div className="main_1">
        <div className="content_1">
          <h2>Book from </h2>{" "}
        </div>
        <div class="dropdown">
          <select style={main_style}>
            <option>
              <font>San Francisco </font>
            </option>
            <option>San Diego </option>
            <option>Chicago</option>
          </select>
        </div>
        <h2> to</h2>
      </div>
      <div className="main_2">
        <Block name="LAS VEGAS" s="NV" short_form="LAS" />
        <Block name="LOS ANGELES" s="CA" short_form="LAX" />
        <Block name="NEW YORK CITY" s="NY" short_form="NYC" />
        <Block name="PALM SPRINGS" s="CA" short_form="PSP" />
        <Block name="PORTLAND" s="OR" short_form="PDX" />

        <Block name="ALL CITIES" />
      </div>
      <div>
        <Second_block />
      </div>
    </div>
  );
}

const main_style = {
  border: "none",
  color: "#932dad"
};

// &#8964;
