import React, { useState, useEffect } from "react";

const useOptionBox = (option) => {
  const [query, setQuery] = useState({
    [option.query_name]: option.query_value,
  });
  console.log(query, "query in useoptionsbox");
  const OptionBox = () => {
    const [checkboxes, setCheckBox] = useState({});
    const [custom, unravel] = useState(option.unravel);
    console.log(query, "query in optionboxs");

    useEffect(() => {
      if (query === false) {
        console.log("false query detected");
        console.log(query, "before");
        setQuery({ [option.query_name]: option.query_value });
        console.log(query, "after");
      }
    }, []);
    const handleCustomOptions = (e) => {
      if (e.target.type == "checkbox") {
        let newCheckSet = checkboxes;
        newCheckSet[e.target.id] = e.target.checked;
        setCheckBox(newCheckSet);

        let languageArray = Object.keys(checkboxes).filter(
          (key) => checkboxes[key]
        );
        setQuery({ [option.query_name]: languageArray });
      } else {
        setQuery({ [e.target.name]: e.target.value.split(" ") });
      }
    };
    return custom[0] ? (
      <div className="OptionBox">
        <button
          className="closeButton"
          type="button"
          onClick={() => {
            unravel([false, false, false]);
            setQuery(false);
          }}
        >
          X
        </button>
        <span id="optionTitle">{option.name}</span>
        <button
          className="buttonschoose"
          onClick={() => unravel([true, !custom[1], false])}
        >
          {">>"}
        </button>
        {custom[1] ? (
          <div className="formOptions">
            {option.input
              .slice(0, option.input.length - 1)
              .map((item, index) => {
                return (
                  <label key={index} htmlFor={item.htmlForAndInputId}>
                    <input
                      key={item.query_value}
                      id={item.htmlForAndUnputId}
                      type={item.inputType}
                      name={item.name}
                      defaultChecked={item.checked}
                      onClick={() => {
                        setQuery({ [item.name]: item.query_value });
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
                onChange={() => {
                  unravel([true, true, true]);
                  setQuery({
                    [option.input[option.input.length - 1].name]: [],
                  });
                }}
                onBlur={() => {
                  unravel([true, true, true]);
                  setQuery({
                    [option.input[option.input.length - 1].name]: [],
                  });
                }}
              />
              {option.input[option.input.length - 1].title}
              <br></br>
            </label>
            <br></br>
            {custom[2] ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <button
                  className="buttonschoose"
                  onClick={() => {
                    unravel([true, true, false]);
                  }}
                >
                  Don`t forget to save me!
                </button>
                <br></br>

                {option.input_secondLayer.map((item, index) => {
                  return (
                    <label key={index} htmlFor={item.htmlForAndInputId}>
                      <input
                        className="inputLabel"
                        id={item.query_value}
                        type={item.inputType}
                        name={item.name}
                        onChange={(e) => handleCustomOptions(e)}
                        onBlur={(e) => handleCustomOptions(e)}
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
