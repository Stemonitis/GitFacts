import React, { useState } from "react";

const useOptionBox = (option, closeOptions) => {
  //this custom hook is the hook that defines the optionboxes based on the information given in the options
  //skeleton.
  //The initial, default, state of the query is defined in the options skeleton. This is why it is set as a
  //the default state in the query state. The key is the name of the optionbox and the name of the filter,
  //and the value is an !!!array of the keywords. Every time if the optionbox is closed and created again it`s
  //state is created again and it is default.
  const [query, setQuery] = useState({
    [option.query_name]: option.query_value,
  });

  const OptionBox = () => {
    console.log("rerender");
    //this is the boolean that unravels first layer of (notcustomisable and default) options
    const [unravel1, setUnravel1] = useState(false);
    //this is the boolean that unravels the second layer of the custom options,
    const [unravel2, setUnravel2] = useState(false);
    //this is the state for the checkboxes that appear after the first unravel (like fot the search in,
    //archived or mirrored)
    const [checkboxes, setCheckboxes] = useState(option.checked_default);
    //this is the state for the custom checkboxes that appear after choosing the custom radio button
    const [customCheckboxes, setCustomCheckBox] = useState({});
    const handleCheckBoxOptions = (
      e,
      existingCheckBoxesState,
      checkBoxSetter
    ) => {
      //first we have to dichotomise the algorrithm based on whether we have multiple options (checkboxes)
      //or the textarea input
      if (e.target.type == "checkbox") {
        console.log("checkbox");
        //in the case of the checkboxes we need to first get the information about the other checkboxes
        //if they are checked or not. This checked state is kept in the "checkboxes" for the checkboxes in the
        //first layer (not custom) and in the customCheckboxes for the checkboxes that may have been unfolded
        //after selecting a custom option in the form
        let newCheckSet = existingCheckBoxesState;
        //The form of the checkboxlist is the state that has the checkbox keyword as a key and it`s status
        // as a boolean. This is the only way to keep track of the state if the checkbox gets unchecked
        newCheckSet[e.target.id] = e.target.checked;
        //next we update the state of the checkboxes
        checkBoxSetter(newCheckSet);
        console.log(newCheckSet, "newCheckSet");
        //here we filter out all the checkboxes with the "false" state for the cases when the option gets
        //unchecked
        let checkBoxArray = Object.keys(existingCheckBoxesState).filter(
          (key) => customCheckboxes[key]
        );
        console.log(checkBoxArray, "checkBoxArray");
        //next we update the query value of the optionBox
        setQuery({ [option.query_name]: checkBoxArray });
      } else {
        setQuery({ [e.target.name]: e.target.value.trim().split(" ") });
      }
    };
    return (
      <div className="OptionBox">
        {/* the close button handles state update in the options component and also it resets the state of
        the option to default one so it matches the checked button form on the option reopening */}
        <button
          className="closeButton"
          type="button"
          onClick={() => {
            closeOptions(option.index);
            setQuery({ [option.query_name]: option.query_value });
          }}
        >
          X
        </button>
        {/* this button toggles the first layer of options  */}
        <span id="optionTitle">{option.name}</span>
        <button
          className="buttonschoose"
          onClick={() => setUnravel1(!unravel1)}
        >
          {">>"}
        </button>
        {unravel1 ? (
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
                      onChange={(e) => {
                        // if (e.target.type == "checkbox") {
                        //   console.log("checkbox");
                        //   //in case our form provides multiple set of options we need more sophisticated
                        //   //way to handle the options
                        //   handleCheckBoxOptions(e, checkboxes, setCheckboxes);
                        //   setUnravel1(true);
                        // } else {
                        //   console.log("radio");
                        //   setQuery({ [item.name]: item.query_value });
                        //   setUnravel1(true);
                        // }
                      }}
                      // onBlur={() => {
                      //   setQuery({ [item.name]: item.query_value });
                      // }}
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
                id={option.input[option.input.length - 1].htmlForAndInputId}
                type={option.input[option.input.length - 1].inputType}
                name={option.input[option.input.length - 1].name}
                onChange={() => {
                  if (
                    option.input[option.input.length - 1].htmlForAndInputId ===
                    "custom"
                  ) {
                    setUnravel2(!unravel2);
                    setQuery({
                      [option.input[option.input.length - 1].name]: [],
                    });
                  } else {
                    () => {
                      if (e.target.type == "checkbox") {
                        console.log("checkbox");
                        handleCheckBoxOptions(e, checkboxes, setCheckboxes);
                      } else {
                        setQuery({
                          [option.input[option.input.length - 1].name]:
                            option.input[option.input.length - 1].query_value,
                        });
                      }
                    };
                  }
                }}
              />
              {option.input[option.input.length - 1].title}
              <br></br>
            </label>
            <br></br>
            {unravel2 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <button
                  className="buttonschoose"
                  onClick={() => {
                    setUnravel2(false);
                  }}
                >
                  Close
                </button>
                <br></br>

                {option.input_secondLayer.map((item, index) => {
                  return (
                    <label key={index} htmlFor={item.htmlForAndInputId}>
                      <input
                        placeholder={item.placeholder}
                        className="inputLabel"
                        id={item.query_value}
                        type={item.inputType}
                        name={item.name}
                        onChange={(e) =>
                          handleCheckBoxOptions(
                            e,
                            customCheckboxes,
                            setCustomCheckBox
                          )
                        }
                        onBlur={(e) =>
                          handleCheckBoxOptions(
                            e,
                            customCheckboxes,
                            setCustomCheckBox
                          )
                        }
                      />
                      <br></br>

                      {item.title}
                      <br></br>
                    </label>
                  );
                })}
              </form>
            )}
            <button
              className="buttonschoose"
              onClick={() => setUnravel1(false)}
            >
              {" "}
              Close{" "}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };
  return [query, OptionBox];
};
export default useOptionBox;
