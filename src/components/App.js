import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import {firestore} from "../firebase";

const App = () => {
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
