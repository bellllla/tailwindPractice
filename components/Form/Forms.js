import { add, indexOf } from "lodash";
import React, { useState } from "react";
import GoMain from "../Common/GoMain";

function Forms() {
  const [inputText, setInputText] = useState("");
  const [addText, setAddText] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const submitHandler = (e) => {
    setDisabled(true);
    e.preventDefault();
    setAddText([inputText, ...addText]);
    setInputText("");
    setDisabled(false);
  };
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  const deleteHandler = (idx,text) => {
    // console.log('chk',addText.indexOf(text), idx)
    const filtering = addText.filter((el) => el !== text);
      return setAddText(filtering);

  };

  return (
    <section>
      <GoMain />

      <form onSubmit={submitHandler}>
        <label className="block text-sm font-medium text-pink-400">
          Add Something
        </label>
        <div className="flex justify-betwee">
        <input
          type="text"
          onChange={inputChangeHandler}
          value={inputText}
          placeholder="Enter any text you want to write!"
          className="
        mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
        invalid:border-pink-500 invalid:text-pink-600
        focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
        />
        <button disabled={disabled} type="submit" name="add-btn">
          +
        </button>
        </div>

        {addText.map((text, idx) => {
          return (
            <ul 
            className="
            cursor-pointer
            mt-1
            hover:bg-black-rgba
            rounded
            flex justify-between shadow-lg p-5 "
            key={idx} 
            onClick={() => deleteHandler(idx,text)}
            >
              <li>{text}</li>
            </ul>
          );
        })}
      </form>
    </section>
  );
}

export default Forms;
