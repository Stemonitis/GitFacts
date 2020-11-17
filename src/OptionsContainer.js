import React from "react";
import OptionBox from "./OptionBox";
import SearchBar from "./OptionBox";
import GoButton from "./GoButton";
export default function OptionsContainer() {
  return (
    <div id="OptionsContainer">
      <SearchBar />
      <OptionBox />
      <GoButton />
    </div>
  );
}
