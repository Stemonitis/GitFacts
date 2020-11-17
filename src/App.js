import React from "react";
import { render } from "react-dom";
import OptionsContainer from "./OptionsContainer";
import SunBurst from "./SunBurst";

const App = () => {
  return (
    <body id="container">
      <header>
        <div id="header-wrapper">
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
        <h2 id="share">Share twitter github fb</h2>
      </header>

      <main>
        <OptionsContainer />
        <SunBurst />
      </main>
      <footer>
        <p>
          <a href="https://github.com/Stemonitis">Stemonitis</a> © 2020
        </p>
      </footer>
    </body>
  );
};

render(<App />, document.getElementById("root"));
