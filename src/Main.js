import React, { useState } from "react";
import GoButton from "./GoButton";
import SunBurst from "./SunBurst";
import SearchSVG from "./SearchSVG.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const test = gql`
  query test {
    all: search(query: "lol", type: REPOSITORY) {
      repositoryCount
    }
    CSS: search(query: "lol language:CSS", type: REPOSITORY) {
      repositoryCount
    }
    javascript: search(query: "lol language:javascript", type: REPOSITORY) {
      repositoryCount
    }
    brainfuck: search(query: "lol language:brainfuck", type: REPOSITORY) {
      repositoryCount
    }
    brainfuckStarred: search(
      query: "lol language:brainfuck stars:>0"
      type: REPOSITORY
    ) {
      repositoryCount
    }
    javascriptStarred: search(
      query: "lol language:javascript stars:>10"
      type: REPOSITORY
    ) {
      repositoryCount
    }
    rateLimit(dryRun: false) {
      cost
      limit
      nodeCount
      remaining
      resetAt
      used
    }
  }
`;

const optionsDefault = [
  "programming languages",
  "repository size",
  "number of contributors",
  "number of commits",
];

const OptionsContainer = () => {
  const [keyword, updateKeyword] = useState("");
  const [options, updateOptions] = useState(optionsDefault);
  const { data, loading, error } = useQuery(test);
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(options);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateOptions(items);
  }
  async function requestGitData() {
    //const { data } = 4; //await
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

              <button type="button">
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
                  {options.map((optionName, index) => {
                    return (
                      <Draggable
                        key={optionName}
                        draggableId={optionName}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div className="OptionBox">{optionName}</div>
                          </li>
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
      <SunBurst id="Sunburst" queryResult={data} />
    </main>
  );
};

export default OptionsContainer;
