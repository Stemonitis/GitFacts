import React, { useState } from "react";

const Navigation = (props) => {
  const [openClosed, openClose] = useState(false);

  return (
    <nav className={`top-right ${openClosed ? "open" : ""}`}>
      <a className="disc l1" href="#share1">
        <div>Share </div>
      </a>
      <a className="disc l2" href="#about">
        <div>About </div>
      </a>
      <a className="disc l3" href="#howto">
        <div>HowTo </div>
      </a>
      <a className="disc l4" href="#home">
        <div>Home </div>
      </a>
      <a className="disc l5 toggle" onClick={(e) => openClose(!openClosed)}>
        {openClosed ? "Close" : "Menu"}
      </a>
    </nav>
  );
};

export default Navigation;

// toggle = document.querySelectorAll(".toggle")[0];
// nav = document.querySelectorAll("nav")[0];
// toggle_open_text = "Menu";
// toggle_close_text = "Close";

// toggle.addEventListener(
//   "click",
//   function () {
//     nav.classList.toggle("open");

//     if (nav.classList.contains("open")) {
//       toggle.innerHTML = toggle_close_text;
//     } else {
//       toggle.innerHTML = toggle_open_text;
//     }
//   },
//   false
// );

// setTimeout(function () {
//   nav.classList.toggle("open");
// }, 800);
