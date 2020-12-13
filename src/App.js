import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

const App = () => {
  return (
    <div id="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

render(<App />, document.getElementById("root"));
