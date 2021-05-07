import * as firebase from "firebase";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import { firestore } from "../firebase";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
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
      <ApolloProvider client={client}>
        <Header />
        <Main />
        <Footer />
      </ApolloProvider>
    </div>
  );
};

render(<App />, document.getElementById("root"));
