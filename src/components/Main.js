import React, { useState } from "react";
import GoButton from "./GoButton";
//import SunBurst from "./SunBurst";
import useOptionBox from "./useOptionBox";
import SearchSVG from "./SearchSVG.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
//import { useQuery } from "@apollo/react-hooks";
//import languageQuery from "../languages.js";

let optionsDef = [
  {
    name: "Programming Languages",
    index: 0,
    query_name: "language",
    unravel: [false, false],
    input: [
      {
        htmlForAndInputId: "default20",
        inputType: "radio",
        name: "language",
        title: "Default(20 most popular languages)",
      },
      {
        htmlForAndInputId: "first10",
        inputType: "radio",
        name: "language",
        title: "First 10 most popular languages",
      },
      {
        htmlForAndInputId: "all",
        inputType: "radio",
        name: "language",
        title: "All (not recommended due to API overload)",
      },
      {
        htmlForAndInputId: "custom",
        inputType: "radio",
        name: "language",
        title: "Customize",
        onChange: () => unravel([true, true]),
      },
    ],
    input_secondlayer: [],
  },
  {
    name: "Repository size",
    index: 1,
    unravel: [false, false],
    query_name: "size",
    checkboxes: {},
    input_range: {},
  },
  {
    name: "Date Created",
    index: 2,
    unravel: [false, false],
    query_name: "created",
    checkboxes: {},
    input_range: {},
  },
  {
    name: "Number of stars",
    index: 3,
    query_name: "stars",
    unravel: [false, false],
    checkboxes: {},
    input_range: {},
  },
];

const OptionsContainer = () => {
  const [keyword, updateKeyword] = useState("");
  const [languageState, Language] = useOptionBox(optionsDef[0]);
  const [reposizeState, RepoSize] = useOptionBox(optionsDef[1]);
  const [datecreatedState, DateCreated] = useOptionBox(optionsDef[2]);
  const [starsState, Stars] = useOptionBox(optionsDef[3]);
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
                        draggableId={optionsDef[index].name}
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
          </DragDropContext>
        </div>
        <GoButton />
      </div>
    </main>
  );
};

export default OptionsContainer;
//<SunBurst id="Sunburst" queryResult={data} />
