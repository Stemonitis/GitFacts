import React, { useState } from "react";
import GoButton from "./GoButton";
//import SunBurst from "./SunBurst";
import useOptionBox from "./useOptionBox";
import SearchSVG from "./SearchSVG.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//import { useQuery } from "@apollo/react-hooks";
//import languageQuery from "../languages.js";
import optionsDef from "../languages.js";

const OptionsContainer = () => {
  const [keyword, updateKeyword] = useState("");
  const [select, updateSelect] = useState(false);
  const [languageQuery, Language] = useOptionBox(optionsDef[0]);
  const [reposizeQuery, RepoSize] = useOptionBox(optionsDef[1]);
  const [datecreatedQuery, DateCreated] = useOptionBox(optionsDef[2]);
  const [starsQuery, Stars] = useOptionBox(optionsDef[3]);
  //you HAVE to make this array from the components otherwise the
  //items won`t splice

  const [optionsArray, updateOptions] = useState([
    <Language key={0} />,
    <RepoSize key={1} />,
    <DateCreated key={2} />,
    <Stars key={3} />,
  ]);
  //const { data, loading, error } = useQuery(languageState.query, datecreatedState.query, starsState,query, reposizeState.query);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(optionsArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateOptions(items);
  }
  function addANewOption(e) {
    const items = Array.from(optionsArray);
    const [newItem] = items.filter((option) => option.key == e.target.value);
    const newnewItem = {
      ...newItem,
      key: optionsArray.length + 1,
    };
    items.push(newnewItem);
    updateOptions(items);
  }
  async function requestGitData() {
    //const { data } = 4; //await
  }

  // if (loading) {
  //   return <p>Loading</p>;
  // }
  // if (error) {
  //   return <p>error</p>;
  // }
  return (
    <main>
      <div id="OptionsContainer">
        <div id="options">
          <div id="SearchBar">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                requestGitData();
              }}
            >
              <label htmlFor="searchWindow">
                <input
                  id="searchWindow"
                  type="text"
                  placeholder="Search in GitHub..."
                  value={keyword}
                  onChange={(e) => updateKeyword(e.target.value)}
                />
              </label>

              <button id="SearchButton" type="button">
                <SearchSVG />
              </button>
            </form>
          </div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="options">
              {(provided) => (
                <ul
                  className="options"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {optionsArray.map((searchOption, index) => {
                    return (
                      <Draggable
                        key={index}
                        draggableId={index + "l"}
                        index={index}
                      >
                        {(provided) => (
                          <ul
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {searchOption}
                          </ul>
                        )}
                      </Draggable>
                    );
                  })}

                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
            <button id="plus" onClick={() => updateSelect(!select)}>
              {select ? "-" : "+"}
            </button>
            {select ? (
              <label id="labelOption" htmlFor="addOptions">
                Select a Search Parameter
                <select onChange={(e) => addANewOption(e)}>
                  {optionsDef.map((option, index) => {
                    return (
                      <option key={index} value={option.index}>
                        {option.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            ) : (
              ""
            )}
          </DragDropContext>
        </div>
        <GoButton />
      </div>
    </main>
  );
};

export default OptionsContainer;
//<SunBurst id="Sunburst" queryResult={data} />
