import React, { useState } from "react";
import { UniqueDirectiveNamesRule } from "graphql";

const useOptionBox = (option) => {
  const [query, setQuery] = useState({
    [option.query_name]: option.query_value,
  });
  console.log(query);
  const OptionBox = () => {
    const [custom, unravel] = useState(option.unravel);
    return custom[0] ? (
      <div className="OptionBox">
        <button
          className="closeButton"
          type="button"
          onClick={() => unravel([false, false, false])}
        >
          X
        </button>
        <span id="optionTitle">{option.name}</span>
        <button
          className="buttonschoose"
          onClick={() => unravel([true, !custom[1], false])}
        >
          >>
        </button>
        {custom[1] ? (
          <div className="formOptions">
            {option.input
              .slice(0, option.input.length - 1)
              .map((item, index) => {
                return (
                  <label key={index} htmlFor={item.htmlForAndInputId}>
                    <input
                      id={item.htmlForAndUnputId}
                      type={item.inputType}
                      name={item.name}
                      defaultChecked={item.checked}
                      onClick={() => {
                        setQuery(item.query_value);
                        unravel([true, true, false]);
                      }}
                    />
                    {item.title}
                    <br></br>
                  </label>
                );
              })}
            <label
              htmlFor={option.input[option.input.length - 1].htmlForAndInputId}
            >
              <input
                id={option.input[option.input.length - 1].htmlForAndUnputId}
                type={option.input[option.input.length - 1].inputType}
                name={option.input[option.input.length - 1].name}
                onChange={() => unravel([true, true, true])}
              />
              {option.input[option.input.length - 1].title}
              <br></br>
            </label>
            <br></br>
            {custom[2] ? (
              <form action="/action_page.php" target="_blank">
                <button
                  className="buttonschoose"
                  type="submit"
                  onClick={() => unravel([true, true, false])}
                >
                  Don`t forget to save me!
                </button>
                <br></br>

                {option.input_secondLayer.map((item, index) => {
                  return (
                    <label key={index} htmlFor={item.htmlForAndInputId}>
                      <input
                        className="inputLabel"
                        id={item.htmlForAndUnputId}
                        type={item.inputType}
                        name={item.name}
                      />
                      {item.title}
                      <br></br>
                    </label>
                  );
                })}
              </form>
            ) : (
              ""
            )}
            <button
              className="buttonschoose"
              onClick={() => unravel([true, false, false])}
            >
              {" "}
              Save{" "}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    ) : (
      ""
    );
  };
  return [query, OptionBox];
};
export default useOptionBox;
