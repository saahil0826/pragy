import React, { useState } from "react";
import "./main.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
const { v4: uuidv4 } = require("uuid");
// let background_color: rgba(255,192,203, .6);

function Footer() {
  // $(".text").on("mouseover", function() {
  //   $("#full-vh").css("background-color", "#000000");
  // });
  // $(".text").on("mouseleave", function() {
  //   $("#full-vh").css("opacity", "0");
  // });
  // const [modal, setModal] = useState([])
  const [data, setdata] = useState([
    {
      id: uuidv4(),
      name: "films",
      items: ["Old Monk", "stuff", "home without a window"],
      modal: false
    },
    {
      id: uuidv4(),
      name: "sketches",
      items: ["saahil", "pragy", "vasu", "prakash"],
      modal: false
    },
    {
      id: uuidv4(),
      name: "photo stories",
      items: ["batliwala", "mansion", "cardi B"],
      modal: false
    },
    {
      id: uuidv4(),
      name: "treatment notes",
      items: ["mumbai", "delhi", "jaipur"],
      modal: false
    },
    {
      id: uuidv4(),
      name: "contact",
      items: ["random", "text", "to fill", "space"],
      modal: false
    }
  ]);

  function MouseOver(event) {

    // $("#full-vh").css("background-color", "LightSlateGray")
    $("#full-vh").addClass( "bg" );
;
  }

  function MouseOut(event) {
    // $("#full-vh").css("background-color", "transparent");
    // $("#full-vh").css('opacity' ,'1');

    // const updatedList = data.map(item =>
    //   item.modal === true ? { ...item, modal: true } : item
    // );
    // setdata(updatedList);

    // $("#full-vh").removeClass( "bg" );

  }



  function BgColor(event) {
    $("#full-vh").css("background-color", "green");
    // $("#full-vh").css("background-color", "LightSlateGray");

  }

  const handleToggle = id => {
    // if (modal) {
    //   // TODO: close the already open modal
    // }
    const updatedList = data.map(item =>
      item.id === id ? { ...item, modal: !item.modal } : item
    );
    setdata(updatedList);
  };

  return (
    <div>
      <div id="wrapper">
        {data.map(d => (
          //active
          <div
            key={d.id}
            onClick={() => {
              handleToggle(d.id);

            }}
          >
            <span
              className={"text " + (d.modal ? "show" : "")}
              onMouseOver={MouseOver}
              onMouseOut={MouseOut}

            >
              {d.name}
            </span>
          </div>
        ))}
      </div>

      {data.map((d, idx) => (
        <div key={idx}>
          {d.modal ? (
            <div id="modal">
              {d.items.map(function(item, idx) {
                return (
                  <NavLink
                    exact
                    to="/"
                    className="list_item"
                    activeClassName="active-link"
                    key={idx}
                  >
                    <span>{item} </span>
                  </NavLink>
                );
              })}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Footer;
