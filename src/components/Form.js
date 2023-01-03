import React, { useState } from "react";
import Nameitems from "./Nameitems";

//form with hover events created with useState hook
function Form() {
  const [nameitems, setItems] = useState([]);
  const [name, setName] = useState("");
  const [submitState, setState] = useState("");
  const [IsMousedOver, setIsMousedOver] = useState(false);
  function populateList(nameitem) {
    return (
      <Nameitems key={nameitem.id} id={nameitem.id} name={nameitem.name} />
    );
  }
  function updateName(event) {
    setState(``);
    setName(event.target.value);
  }
  function handleSubmitState(event) {
    setItems((prevItems) => {
      return [...prevItems, { id: prevItems.length, name: name }];
    });
    setName(``);
    setState("Updated😁");
    event.preventDefault();
  }
  function handleMouseOver() {
    setIsMousedOver(true);
  }
  function handleMouseOut() {
    setIsMousedOver(false);
  }
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl flex flex-col justify-center items-center space-y-6 w-full p-5">
        <ul className="text-white">
          <h1 className="text-2xl text-white text-center mb-6">Name List</h1>
          {nameitems.map(populateList)}
        </ul>
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmitState}
        >
          <div className="mb-6">
            <h1 className="text-2xl text-white text-center mb-6">
              {name}
              {submitState}
            </h1>
            <input
              type="text"
              id="name"
              className="text-center shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="What's your name?"
              autoComplete="off"
              value={name}
              required
              onChange={updateName}
            />
          </div>
          <button
            type="submit"
            className=" rounded-lg text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium text-xl px-5 py-2.5 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 m-2"
            style={{
              backgroundColor: IsMousedOver
                ? "rgb(30 64 175)"
                : "rgb(59 78 255)",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            add
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
