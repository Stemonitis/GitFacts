import React, { useState } from "react";
import GoButton from "./GoButton";
import SunBurst from "./SunBurst";
import useOptionBox from "./useOptionBox";
import SearchSVG from "./SearchSVG.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useLazyQuery } from "@apollo/react-hooks";
import { optionsDef, test1 } from "../languages.js";
import makeGQL from "./makeGQL.js";
import gql from "graphql-tag";

const OptionsContainer = () => {
  //this is the hook for the search bar. It updates automatically every
  //every time you type so you actually dont need the button
  const [keyword, updateKeyword] = useState("");
  //these are the family of hooks for different options. I am planning to add
  //8 more of these
  const [languageQuery, Language] = useOptionBox(optionsDef[0]);
  const [reposizeQuery, RepoSize] = useOptionBox(optionsDef[1]);
  const [datecreatedQuery, DateCreated] = useOptionBox(optionsDef[2]);
  const [starsQuery, Stars] = useOptionBox(optionsDef[3]);

  //this is the hook that updates the order of options it used in the
  //function handle on drag that makes sure that we keep track of the
  //order of draggable options. Options array gets mapped into the
  //the drag and drop area
  const [optionsArray, updateOptions] = useState([
    <Language key={0} type="language" />,
    <RepoSize key={1} type="size" />,
    <DateCreated key={2} type="created" />,
    <Stars key={3} type="stars" />,
  ]);

  //toggles the state of the "plus" button for adding options
  const [select, updateSelect] = useState(false);

  //this hook gets triggered every time we push sunburst. It tells
  //us that user is done with altering the options and wants to see the
  //result. QueryString is an array that consists of 1)array of GQL tags
  //with max 100 2)initial array of optinbox states in the initial order.
  //you need to have a valid initial state in this hook, in other case the components will
  //not load
  const [queryString, updateQueryString] = useState([[test1]]);
  let i = 0;
  //lazyquery for calling the github server
  const [fire, { loading, data }] = useLazyQuery(
    gql`
      ${queryString[i][0]}
    `,
    {
      fetchPolicy: "network-only",
    }
  );

  //this function handles rearrangement of options and updates the order of optionboxes
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(optionsArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateOptions(items);
  }
  //handles adding new options. When the new option of the same kind is added their state is shared
  function addANewOption(e) {
    const items = Array.from(optionsArray);
    const [newItem] = items.filter((option) => option.key == e.target.value);
    const newnewItem = {
      ...newItem,
      key: (optionsArray.length + 1).toString(),
      props: {
        type:
          e.target.value === 0
            ? "language"
            : e.target.value === 1
            ? "size"
            : e.target.value === 2
            ? "created"
            : "stars",
      },
    };
    items.push(newnewItem);
    updateOptions(items);
  }
  //this function gets triggered by "sunburst my search" button. it makes the proper gql formatted queries
  //and updates the query string state
  function requestGitData() {
    const newQuery = makeGQL(keyword, [
      languageQuery,
      reposizeQuery,
      datecreatedQuery,
      starsQuery,
    ]);
    updateQueryString(newQuery);
    fire();
  }
  //shows sunburst loading state
  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <main>
      <div id="OptionsContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            requestGitData();
          }}
        >
          <div id="options">
            <div id="SearchBar">
              <form>
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
                  <select onClick={(e) => addANewOption(e)}>
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
            <GoButton />
          </div>
        </form>
      </div>
      <SunBurst id="Sunburst" queryResult={data} />
    </main>
  );
};

export default OptionsContainer;
