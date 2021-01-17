import React, { useState } from "react";
import GoButton from "./GoButton";
import SunBurst from "./SunBurst";
import useOptionBox from "./useOptionBox";
import SearchSVG from "./SearchSVG.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useQuery } from "@apollo/react-hooks";
import { optionsDef, test1 } from "../languages.js";
import makeGQL from "./makeGQL.js";

const OptionsContainer = () => {
  console.log(test1);
  const [keyword, updateKeyword] = useState("");
  const [select, updateSelect] = useState(false);
  const [languageQuery, Language] = useOptionBox(optionsDef[0]);
  const [reposizeQuery, RepoSize] = useOptionBox(optionsDef[1]);
  const [datecreatedQuery, DateCreated] = useOptionBox(optionsDef[2]);
  const [starsQuery, Stars] = useOptionBox(optionsDef[3]);
  const [optionsArray, updateOptions] = useState([
    <Language key={0} type="language" />,
    <RepoSize key={1} type="size" />,
    <DateCreated key={2} type="created" />,
    <Stars key={3} type="stars" />,
  ]);
  const [queryString, updateLanguageQueryString] = useState("");
  const { data, loading, error } = useQuery(test1);

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

  function requestGitData() {
    updateLanguageQueryString(
      makeGQL(keyword, [
        languageQuery,
        reposizeQuery,
        datecreatedQuery,
        starsQuery,
      ])
    );
  }

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return <p>error</p>;
  }
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
        </div>
        <GoButton />
      </div>
      <SunBurst id="Sunburst" queryResult={data} />
    </main>
  );
};

export default OptionsContainer;
