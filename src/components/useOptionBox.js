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
  console.log(query, "query");

  const OptionBox = () => {
    //this is the boolean that unravels first layer of (notcustomisable and default) options
    const [unravel1, setUnravel1] = useState(false);
    //this is the boolean that unravels the second layer of the custom options,
    const [unravel2, setUnravel2] = useState(false);
    //these are the states for the checkboxes that appear after the first unravel (like fot the search in,
    //archived or mirrored) and for the second layer of the checkboxes. This states exist to keep track
    //of the checked options while combining the query and are passed to the onclick function that is triggered
    //after interacting with the checkboxes and is responsible for updating the query.
    const [checkboxesStateForQuery, setCheckboxesStateForQuery] = useState(
      option.checked_default
    );
    const [
      secondLayerCheckboxesStateForQuery,
      setSecondLayerCheckboxesStateForQuery,
    ] = useState({});
    //these hooks store values of radio or checkboxes so that the user selected values dont dissappear on
    //rerendering the forms. It uses an object with the htmlForAndInputId property of each button as a
    //a key so you can easily find and update the state. Initial state is just sets all the button htmlForInput
    //to true if that property is initially there or to false if that property is missing. Second layer is
    //just an empty object as there are no initial checked options in the custom layer.
    const [keepCheckedState, setCheckedState] = useState(
      option.input.reduce(
        (object, l) => ({
          ...object,
          ...{ ...{ [l.htmlForAndInputId]: l.checked === true } },
        }),
        {}
      )
    );
    const [keepSecondLayerState, setSecondLayerState] = useState({});
    //the function that updates the query in the case form has multiple checked inpputs(checkboxes)
    const handleCheckBoxOptions = (
      e,
      existingCheckBoxesState,
      checkBoxSetter
    ) => {
      //first we have to dichotomise the algorrithm based on whether we have multiple options (checkboxes)
      //or the textarea input
      if (e.target.type == "checkbox") {
        //in the case of the checkboxes we need to first get the information about the other checkboxes
        //if they are checked or not. This checked state is kept in the "checkboxes" for the checkboxes in the
        //first layer (not custom) and in the customCheckboxes for the checkboxes that may have been unfolded
        //after selecting a custom option in the form
        let newCheckSet = existingCheckBoxesState;
        //The form of the checkboxlist is the state that has the checkbox keyword as a key and it`s status
        // as a boolean. This is the only way to keep track of the state if the checkbox gets unchecked
        newCheckSet[e.target.attributes.query_value.nodeValue] =
          e.target.checked;

        //next we update the state of the checkboxes
        checkBoxSetter(newCheckSet);
        //here we filter out all the checkboxes with the "false" state for the cases when the option gets
        //unchecked
        let checkBoxArray = Object.keys(existingCheckBoxesState).filter(
          (key) => existingCheckBoxesState[key]
        );
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
            //this button closes the option: it updates it`s position in the option component by
            //closeOptions updater, sets the query value to default and also all the checkboxes` states to
            //default as well.
            closeOptions(option.index);
            setQuery({ [option.query_name]: option.query_value });
            setCheckboxesStateForQuery(option.checked_default);
            setSecondLayerCheckboxesStateForQuery({});
            setCheckedState(
              option.input.reduce(
                (object, l) => ({
                  ...object,
                  ...{ ...{ [l.htmlForAndInputId]: l.checked === true } },
                }),
                {}
              )
            );
            setSecondLayerState({});
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
          // here we map the options of the form except the last one option, as it can have custom options that
          // can unravel if we click on it
          <div className="formOptions">
            {option.input
              .slice(0, option.input.length - 1)
              .map((item, index) => {
                return (
                  <label key={index} htmlFor={item.htmlForAndInputId}>
                    <input
                      key={item.query_value}
                      id={item.htmlForAndInputId}
                      type={item.inputType}
                      name={item.name}
                      query_value={item.query_value}
                      defaultChecked={keepCheckedState[item.htmlForAndInputId]}
                      onChange={(e) => {
                        if (e.target.type == "checkbox") {
                          //this is to keep the default state of the form the way user selected it
                          const newState = keepCheckedState;
                          newState[item.htmlForAndInputId] = e.target.checked;
                          setCheckedState(newState);
                          //in case our form provides multiple set of options we need more sophisticated
                          //way to handle the options
                          handleCheckBoxOptions(
                            e,
                            checkboxesStateForQuery,
                            setCheckboxesStateForQuery
                          );
                        } else {
                          //this is for the time we go from the custom checkboxes` state and we need to reset
                          //the values from it
                          setSecondLayerState({});
                          setSecondLayerCheckboxesStateForQuery({});
                          //now we need access to the previous default state for the radio buttons
                          const newState = keepCheckedState;
                          //and we need to set all the defaultchecked radiostates except this one to false
                          Object.keys(newState).forEach(
                            (v) => (newState[v] = false)
                          );
                          newState[item.htmlForAndInputId] = e.target.checked;
                          setCheckedState(newState);
                          setQuery({ [item.name]: item.query_value });
                          //and close the custom option choices if they were open
                          setUnravel2(false);
                        }
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
                id={option.input[option.input.length - 1].htmlForAndInputId}
                type={option.input[option.input.length - 1].inputType}
                name={option.input[option.input.length - 1].name}
                query_value={option.input[option.input.length - 1].query_value}
                defaultChecked={
                  keepCheckedState[
                    option.input[option.input.length - 1].htmlForAndInputId
                  ]
                }
                onChange={(e) => {
                  if (
                    option.input[option.input.length - 1].htmlForAndInputId ===
                    "custom"
                  ) {
                    //the same as previous one
                    const newState = keepCheckedState;
                    Object.keys(newState).forEach((v) => (newState[v] = false));
                    newState[
                      option.input[option.input.length - 1].htmlForAndInputId
                    ] = e.target.checked;
                    setCheckedState(newState);
                    setUnravel2(true);
                    setQuery({
                      [option.input[option.input.length - 1].name]: [],
                    });
                  } else {
                    const newState = keepCheckedState;
                    newState[
                      option.input[option.input.length - 1].htmlForAndInputId
                    ] = e.target.checked;
                    console.log(e.target.checked);
                    setCheckedState(newState);
                    if (e.target.type == "checkbox") {
                      handleCheckBoxOptions(
                        e,
                        checkboxesStateForQuery,
                        setCheckboxesStateForQuery
                      );
                    } else {
                      setQuery({
                        [option.input[option.input.length - 1].name]:
                          option.input[option.input.length - 1].query_value,
                      });
                    }
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
                        query_value={item.query_value}
                        defaultChecked={keepSecondLayerState[item.query_value]}
                        onChange={(e) => {
                          const newObject = keepSecondLayerState;
                          newObject[item.query_value] = e.target.value;
                          setSecondLayerState(newObject);
                          handleCheckBoxOptions(
                            e,
                            secondLayerCheckboxesStateForQuery,
                            setSecondLayerCheckboxesStateForQuery
                          );
                        }}
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
