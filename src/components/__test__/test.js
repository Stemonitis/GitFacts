import React from "react";
import ReactDOM from "react-dom";
import Main from "../Main";

test("mounts", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Main />, div);
});

//test to write
// 1)App mounts
// 2)Header mounts
// 3)Main mounts
// 4)Footer mounts
// 6)on sunburst button d3.js mounts
// 7)data fed to make gql is well-formatted
// 8)data that comes out of makegql is well-formatted
// 9)same two things for hierarachy
