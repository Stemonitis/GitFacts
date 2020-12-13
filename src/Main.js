import React, { useState } from "react";
import GoButton from "./GoButton";
import SunBurst from "./SunBurst";
import SearchSVG from "./SearchSVG.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const optionsDefault = [
  "programming languages",
  "repository size",
  "number of contributors",
  "number of commits",
];

const OptionsContainer = () => {
  const [keyword, updateKeyword] = useState("");
  const [options, updateOptions] = useState(optionsDefault);
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
      <SunBurst id="Sunburst" />
    </main>
  );
};

export default OptionsContainer;
