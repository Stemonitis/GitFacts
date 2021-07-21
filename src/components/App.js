import * as firebase from "firebase";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import JoyRide from "react-joyride";
import Main from "./Main";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import { firestore } from "../firebase";
const TOUR_STEPS = [
  {
    target: "#searchWindow",
    content: "Type your search keyword/phrase here.",
  },
  {
    target: ".closeButton",
    content: "On to the search filters! You can close them...",
  },
  {
    target: "#plus",
    content:
      "...as well as add as many as you want (you can find ALL the filters github has to offer)",
  },
  {
    target: ".options",
    content:
      "You can also change options` order by dragging and dropping. (The order of the rings in the diagram will change accordingly)",
  },
  {
    target: "#goButton",
    content: "And, finally, submit your search",
  },
  {
    target: ".toggle1",
    content:
      "If your diagram has more than two layers, toggle to zoomable diagram and unveil all the layers one by one",
  },
];
const App = () => {
  const [isLoading, setLoading] = useState(true);
  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 0));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);
  if (isLoading) {
    return null;
  }

  return (
    <div id="container">
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        showProgress={true}
        spotlightClicks={true}
        run={true}
      />
      <ApolloProvider client={client}>
        <Header />
        <Main />
        <Footer />
      </ApolloProvider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
