import React, { useState, useRef, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useOptionBox from "./useOptionBox";
import optionsSkeleton from "./optionsSkeleton.js";
import makeGQL from "./makeGQL.js";

const Options = (props) => {
  //this is the hook for the search bar. It updates automatically every
  //every time you type so you actually dont need the button
  const [keyword, updateKeyword] = useState("");
  const [closeIndex, closeOptions] = useState("l");

  //these are the family of hooks for different options. There are a lot of hooks, but because of
  //the necessity of keeping both their states, order and closed/open states and also the fact that
  //we have to give a key to each components to track their order in the drag and drop area
  //main
  const [languageQuery, Language] = useOptionBox(
    optionsSkeleton[0],
    closeOptions
  );
  const [reposizeQuery, RepoSize] = useOptionBox(
    optionsSkeleton[1],
    closeOptions
  );
  const [datecreatedQuery, DateCreated] = useOptionBox(
    optionsSkeleton[2],
    closeOptions
  );

  const [starsQuery, Stars] = useOptionBox(optionsSkeleton[3], closeOptions);
  //additional
  const [searchInQuery, SearchIn] = useOptionBox(
    optionsSkeleton[4],
    closeOptions
  );
  const [repoQuery, RepoSearch] = useOptionBox(
    optionsSkeleton[5],
    closeOptions
  );
  const [userQuery, User] = useOptionBox(optionsSkeleton[6], closeOptions);
  const [organizationQuery, Organization] = useOptionBox(
    optionsSkeleton[7],
    closeOptions
  );
  const [followersQuery, Followers] = useOptionBox(
    optionsSkeleton[8],
    closeOptions
  );
  const [forksQuery, Forks] = useOptionBox(optionsSkeleton[9], closeOptions);
  const [pushedQuery, Pushed] = useOptionBox(optionsSkeleton[10], closeOptions);
  const [topicQuery, Topic] = useOptionBox(optionsSkeleton[11], closeOptions);
  const [topicsQuery, Topics] = useOptionBox(optionsSkeleton[12], closeOptions);
  const [licenseQuery, License] = useOptionBox(
    optionsSkeleton[13],
    closeOptions
  );
  const [visibilityQuery, Visibility] = useOptionBox(
    optionsSkeleton[14],
    closeOptions
  );
  const [mirrorQuery, Mirror] = useOptionBox(optionsSkeleton[15], closeOptions);
  const [archivedQuery, Archived] = useOptionBox(
    optionsSkeleton[16],
    closeOptions
  );

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
  useEffect(() => {
    let items = Array.from(optionsArray);
    let optionsOrder = optionsArray.map((option) => option.key);
    let filtered = items.filter((option, i) => optionsOrder[i] != closeIndex);
    updateOptions(filtered);
  }, [closeIndex]);
  //this function handles rearrangement of options and updates the order of optionboxes
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(optionsArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
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
    const optionsOrder = optionsArray.map((option) => option.key);
    let queryList = optionsOrder.map((order) => requestList[order]);
    let filtered = items.filter((option, i) => {
      return queryList[i] !== false;
    });
    updateOptions(filtered);
  }
  //this function handles closing options. It gets passed down to the optionBox and is triggered every time
  //a user closes the button. It also resets the state of the corresponding query to default

  //handles adding new options. When the new option of the same kind is added their state is shared
  function addANewOption(e) {
    //first check for the options that have false queries and delete them, so there are no
    //duplicated options. Also we want to delete and splice out all of the options that
    //have the same key (they will automatically disappear from the options screen)
    const optionsOrder = optionsArray.map((option) => option.key);
    let item = Array.from(optionsArray);
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
  //and updates the query string state. It tells
  //us that user is done with altering the options and wants to see the
  //result. QueryString is an array that consists of 1)array of GQL tags
  //with max 100 2)initial array of optinbox states in the initial order.
  //you need to have a valid initial state in this hook, in other case the components will
  //not load

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
    console.log(newQuery);
    props.updateQueryIterator(newQuery[0].length - 1);
    props.updateQueryString(newQuery);
    props.updateResponseData([]);
    props.updateLoadingCount([0, newQuery[0].length]);
    props.fire();
  }
  return (
    <div id="OptionsContainer">
      <div id="options">
        <div id="SearchBar">
          <label htmlFor="searchWindow">
            <input
              key="searchInput"
              id="searchWindow"
              type="text"
              placeholder="Search in GitHub..."
              value={keyword}
              onChange={(e) => {
                updateKeyword(e.target.value);
              }}
              // onBlur={(e) => updateKeyword(e.target.value)}
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
                {optionsSkeleton.map((option, index) => {
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
  );
};

export default Options;
