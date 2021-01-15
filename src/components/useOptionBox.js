import React, { useState } from "react";

const useOptionBox = (option) => {
  const [state, setState] = useState(option);
  const OptionBox = () => {
    const [custom, unravel] = useState(option.unravel);
    return (
      <div className="OptionBox">
        {option.name}
        <button
          className="buttonschoose"
          onClick={() => unravel([true, false])}
        >
          >>
        </button>
        {custom[0] ? (
          <form className="formOptions">
            {option.input.map((item, index) => {
              return (
                <label key={index} htmlFor={item.htmlForAndInputId}>
                  <input
                    id={item.htmlForAndUnputId}
                    type={item.inputType}
                    name={item.name}
                    onChange={item.onChange}
                  />
                  {item.title}
                  <br></br>
                </label>
              );
            })}
            <br></br>
            {custom[1] ? (
              <form>
                <label htmlFor="Python">
                  Python
                  <input type="checkbox" />
                </label>

                <button
                  className="buttonschoose"
                  onClick={() => unravel([true, false])}
                >
                  OK
                </button>
              </form>
            ) : (
              ""
            )}
            <button
              className="buttonschoose"
              onClick={() => unravel([false, false])}
            >
              {" "}
              Save{" "}
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    );
  };
  return [state, OptionBox];
};
export default useOptionBox;
