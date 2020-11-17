import React from "react";
import { render } from "react-dom";
import GoButton from "./GoButton";
import OptionsContainer from "./OptionsContainer";
import SearchBar from "./SearchBar";
import SunBurst from "./SunBurst";

const App = () => {
  return (
    <div id="container">
      <div id="left-border"></div>
      <div id="header-wrapper">
        <header>
          <div>
            <h1 id="title">
              Git
              <img
                id="logo"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              />
              Facts
            </h1>
            <h2 id="desc">visualize your github search...</h2>
          </div>
          <h2>Share twitter github fb</h2>
        </header>
        <body>
          <SearchBar />
          <OptionsContainer id="options" />
          <GoButton />
          <SunBurst id="sunburst" />
        </body>
        <div id="right-border"></div>
        <footer>
          <p>blabla(c)2020</p>
        </footer>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
