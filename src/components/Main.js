import React, { useState, useRef } from "react";
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
      name: "past month",
      children: [
        { name: "keyword 2 match", size: 4 },
        { name: "no matches", size: 4 },
      ],
    },
    {
      name: "past year",
      children: [
        { name: "keyword 2 match", size: 3 },
        { name: "no matches", size: 3 },
      ],
    },
  ],
};
const OptionsContainer = () => {
  //this is the hook for the search bar. It updates automatically every
  //every time you type so you actually dont need the button
  const [keyword, updateKeyword] = useState("");
  //these are the family of hooks for different options. I am planning to add
  //main
  const [languageQuery, Language] = useOptionBox(optionsDef[0]);
  const [reposizeQuery, RepoSize] = useOptionBox(optionsDef[1]);
  const [datecreatedQuery, DateCreated] = useOptionBox(optionsDef[2]);
  const [starsQuery, Stars] = useOptionBox(optionsDef[3]);
  //additional
  const [searchInQuery, SearchIn] = useOptionBox(optionsDef[4]);
  const [repoQuery, RepoSearch] = useOptionBox(optionsDef[5]);
  const [userQuery, User] = useOptionBox(optionsDef[6]);
  const [organizationQuery, Organization] = useOptionBox(optionsDef[7]);
  const [followersQuery, Followers] = useOptionBox(optionsDef[8]);
  const [forksQuery, Forks] = useOptionBox(optionsDef[9]);
  const [pushedQuery, Pushed] = useOptionBox(optionsDef[10]);
  const [topicQuery, Topic] = useOptionBox(optionsDef[11]);
  const [topicsQuery, Topics] = useOptionBox(optionsDef[12]);
  const [licenseQuery, License] = useOptionBox(optionsDef[13]);
  const [visibilityQuery, Visibility] = useOptionBox(optionsDef[14]);
  const [mirrorQuery, Mirror] = useOptionBox(optionsDef[15]);
  const [archivedQuery, Archived] = useOptionBox(optionsDef[16]);
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
    [languageQuery, datecreatedQuery],
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
      ${queryString[0][loadingCount[0]]}
    `,
    {
      onCompleted: (datachunk) => {
        //refetch data if error
        //update response data
        console.log(loadingCount[0], "loadingcount");
        console.log(queryIterator, "queryIterator");
        console.log(queryString[0][loadingCount[0]], "gql query");
        let append = responseData;
        append.push(datachunk);
        updateResponseData(append);
        updateSunBurstData(responseData);

        //if there are more items in the array than we want to fetch than we want to continue looping
        //through the array
        if (queryIterator > 0) {
          updateQueryIterator(queryIterator - 1);
          updateLoadingCount([loadingCount[0] + 1, loadingCount[1]]);
          fire();
        }
      },
    }
  );
  const [toZoomOrNotToZoom, toggleSunburst] = useState(true);

  //this function handles rearrangement of options and updates the order of optionboxes
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(optionsArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    const optionsOrder = optionsArray.map((option) => option.key);
    const requestList = [
      languageQuery,
      reposizeQuery,
      datecreatedQuery,
      starsQuery,
      searchInQuery,
      repoQuery,
      userQuery,
      organizationQuery,
      followersQuery,
      forksQuery,
      pushedQuery,
      topicQuery,
      topicsQuery,
      licenseQuery,
      visibilityQuery,
      mirrorQuery,
      archivedQuery,
    ];
    let queryList = optionsOrder.map((order) => requestList[order]);
    let filtered = items.filter((option, i) => {
      return queryList[i] !== false;
    });
    updateOptions(filtered);
  }
  //handles adding new options. When the new option of the same kind is added their state is shared
  function addANewOption(e) {
    //first check for the options that have false queries and delete them, so there are no
    //duplicated options. Also we want to delete and splice out all of the options that
    //have the same key (they will automatically dissapear from the options screen)
    const optionsOrder = optionsArray.map((option) => option.key);
    const requestList = [
      languageQuery,
      reposizeQuery,
      datecreatedQuery,
      starsQuery,
      searchInQuery,
      repoQuery,
      userQuery,
      organizationQuery,
      followersQuery,
      forksQuery,
      pushedQuery,
      topicQuery,
      topicsQuery,
      licenseQuery,
      visibilityQuery,
      mirrorQuery,
      archivedQuery,
    ];
    let item = Array.from(optionsArray);
    let queryList = optionsOrder.map((order) => requestList[order]);
    let items = item.filter((option, i) => {
      return queryList[i] !== false;
    });
    const allOptions = [
      <Language key={0} type="language" />,
      <RepoSize key={1} type="size" />,
      <DateCreated key={2} type="created" />,
      <Stars key={3} type="stars" />,
      <SearchIn key={4} type="in" />,
      <RepoSearch key={5} type="repo" />,
      <User key={6} type="user" />,
      <Organization key={7} type="organization" />,
      <Followers key={8} type="followers" />,
      <Forks key={9} type="forks" />,
      <Pushed key={10} type="pushed" />,
      <Topic key={11} type="topic" />,
      <Topics key={12} type="topics" />,
      <License key={13} type="license" />,
      <Visibility key={14} type="visibility" />,
      <Mirror key={15} type="mirror" />,
      <Archived key={16} type="archived" />,
    ];
    const [newItem] = allOptions.filter(
      (option) => option.key == e.target.value
    );

    const newnewItem = {
      ...newItem,
      key: newItem.key,
      props: {
        type:
          e.target.value === 0
            ? "language"
            : e.target.value === 1
            ? "size"
            : e.target.value === 2
            ? "created"
            : e.target.value === 3
            ? "stars"
            : e.target.value === 4
            ? "in"
            : e.target.value === 5
            ? "stars"
            : e.target.value === 6
            ? "user"
            : e.target.value === 7
            ? "organization"
            : e.target.value === 8
            ? "followers"
            : e.target.value === 9
            ? "forks"
            : e.target.value === 10
            ? "pushed"
            : e.target.value === 11
            ? "topic"
            : e.target.value === 12
            ? "topics"
            : e.target.value === 13
            ? "license"
            : e.target.value === 14
            ? "visibility"
            : e.target.value === 15
            ? "mirror"
            : e.target.value === 16
            ? "archived"
            : "",
      },
    };
    items.push(newnewItem);
    updateOptions(items);
  }

  //this function gets triggered by "sunburst my search" button. it makes the proper gql formatted queries
  //and updates the query string state
  function requestGitData() {
    const optionsOrder = optionsArray.map((option) => option.key);
    const requestList = [
      languageQuery,
      reposizeQuery,
      datecreatedQuery,
      starsQuery,
      searchInQuery,
      repoQuery,
      userQuery,
      organizationQuery,
      followersQuery,
      forksQuery,
      pushedQuery,
      topicQuery,
      topicsQuery,
      licenseQuery,
      visibilityQuery,
      mirrorQuery,
      archivedQuery,
    ];
    if (
      optionsOrder.map((order) => requestList[order]).filter((i) => i !== false)
        .length === 0
    )
      return;

    const newQuery = makeGQL(
      keyword,
      optionsOrder.map((order) => requestList[order]).filter((i) => i !== false)
    );

    updateQueryIterator(newQuery[0].length - 1);
    updateQueryString(newQuery);
    updateResponseData([]);
    updateLoadingCount([0, newQuery[0].length]);
    fire();
  }

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
                onBlur={(e) => updateKeyword(e.target.value)}
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
                  onBlur={() => {
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
          <div id="SunBurstStatus">
            {loading ? (
              <LoadingBar key={loadingCount} loadingCount={loadingCount} />
            ) : error ? (
              <p>Error. Please, resubmit your search or try later</p>
            ) : (
              ""
            )}
          </div>
          {toZoomOrNotToZoom ? (
            <SunBurstWhole
              key={sunBurstData}
              queryResult={sunBurstData}
              queryString={queryString[1]}
            />
          ) : (
            <SunBurstZoomable
              key={sunBurstData}
              queryResult={sunBurstData}
              queryString={queryString[1]}
            />
          )}
        </div>
      </>
    </main>
  );
};

export default OptionsContainer;
