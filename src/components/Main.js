import React, { useState } from "react";
import SunBurstWhole from "./SunBurstWhole";
import SunBurstZoomable from "./SunBurstZoomable";
import LoadingBar from "./LoadingBar";
import useOptionBox from "./useOptionBox";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useLazyQuery } from "@apollo/react-hooks";
import { optionsDef, test1 } from "../languages.js";
import makeGQL from "./makeGQL.js";
import gql from "graphql-tag";
const mockData = {
  name: "allData",
  children: [
    {
      name: "python",
      children: [
        { name: "1 star", size: 4 },
        { name: "2 star", size: 4 },
      ],
    },
    {
      name: "ja",
      children: [
        { name: "1 star", size: 3 },
        { name: "2 star", size: 3 },
        {
          name: "Sub B3",
          size: 3,
        },
      ],
    },
    {
      name: "brainfuck",
      children: [
        { name: "1 stars", size: 4 },
        { name: "2 star", size: 4, children: [{ name: "hoho", size: 7 }] },
      ],
    },
    {
      name: "fuck",
      children: [
        { name: "1 star", size: 6 },
        { name: "2 star", size: 4 },
      ],
    },
  ],
};
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
  const [queryString, updateQueryString] = useState([
    [test1, test1, test1],
    [languageQuery, reposizeQuery, datecreatedQuery, starsQuery],
  ]);
  //this is the iterator that helps to loop through the array of queries
  const [queryIterator, updateQueryIterator] = useState(0);
  //this is the api data
  let [responseData, updateResponseData] = useState([]);
  //lazyquery for calling the github server
  let [sunBurstData, updateSunBurstData] = useState(mockData);
  let [loadingCount, updateLoadingCount] = useState([0, 0]);
  const [fire, { error, loading }] = useLazyQuery(
    gql`
      ${queryString[0][queryIterator]}
    `,
    {
      onCompleted: (datachunk) => {
        //refetch data if error
        //update response data
        let append = responseData;
        append.push(datachunk);
        updateResponseData(append);
        updateSunBurstData(responseData);
        updateLoadingCount([loadingCount[0] + 1, loadingCount[1]]);
        //if there are more items in the array than we want to fetch than we want to continue looping
        //through the array
        if (queryIterator > 0) {
          updateQueryIterator(queryIterator - 1);
          fire();
        }
      },
    }
  );
  const [toZoomOrNotToZoom, toggleSunburst] = useState(true);
  //transform the data from the api into the hierarchical data and feed it into the sunburst diagram
  // useEffect(() => {
  //   console.log(responseData, "responseData in the useeffect hook");

  //   window.hierarchy = transformIntoPartionData(responseData, queryString[1]);
  //   console.log(window.hierarchy, "useeffect data update");
  // }, [responseData, queryString]);
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

    updateQueryIterator(newQuery[0].length - 1);
    updateQueryString(newQuery);
    updateResponseData([]);
    updateLoadingCount([0, newQuery[0].length]);
    fire();
  }
  //shows sunburst loading state

  return (
    <main>
      <div id="OptionsContainer">
        <div id="options">
          <div id="SearchBar">
            <label htmlFor="searchWindow">
              <input
                id="searchWindow"
                type="text"
                placeholder="Search in GitHub..."
                value={keyword}
                onChange={(e) => updateKeyword(e.target.value)}
              />
            </label>
            <div id="buttonDiv" type="submit">
              <button
                id="goButton"
                className="glow-on-hover"
                onClick={() => {
                  requestGitData();
                }}
              >
                Sunburst My Search!
              </button>
            </div>
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
      </div>
      <>
        <div className="SunBurstContainer">
          <div className="buttonWrapper">
            <div>
              <div className="toggle">
                <input
                  className="toggle-state"
                  type="checkbox"
                  checked={toZoomOrNotToZoom}
                  onChange={() => {
                    return;
                  }}
                />
                <div
                  className="indicator"
                  onClick={function () {
                    toggleSunburst(!toZoomOrNotToZoom);
                  }}
                ></div>
              </div>
              <div id="toggler">
                {toZoomOrNotToZoom
                  ? "Toggle to zoomable diagram"
                  : "Toggle to the whole diagram"}
              </div>
            </div>
          </div>

          {toZoomOrNotToZoom ? (
            <SunBurstZoomable
              key={sunBurstData}
              queryResult={sunBurstData}
              queryString={queryString[1]}
            />
          ) : (
            <SunBurstWhole
              key={sunBurstData}
              queryResult={sunBurstData}
              queryString={queryString[1]}
            />
          )}
          <div id="SunBurstStatus">
            {loading ? (
              <LoadingBar key={loadingCount} loadingCount={loadingCount} />
            ) : error ? (
              <p>Error. Please, resubmit your search or try later</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    </main>
  );
};

export default OptionsContainer;
