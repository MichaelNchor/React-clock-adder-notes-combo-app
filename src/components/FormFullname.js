import React, { useState } from "react";

function FormFullname() {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
  });

  function handlefullname(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;
    const { newValue, inputName } = event.target;

    setfullname((prevValue) => {
      if (inputName === "fname") {
        return {
          fname: newValue,
          lname: prevValue.lname,
        };
      } else if (inputName === "lname") {
        return {
          fname: prevValue.fname,
          lname: newValue,
        };
      }
    });
  }
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl flex flex-col justify-center items-center space-y-6 w-full p-5">
        <form className="flex flex-col justify-center items-center">
          <div className="mb-6">
            <h1 className="text-2xl text-white text-center mb-6">
              Hello {fullname.fname} {fullname.lname}
            </h1>
            <input
              type="text"
              id="name"
              name="fname"
              className="text-center shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="First name"
              autoComplete="off"
              required
              value={fullname.fname}
              onChange={handlefullname}
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              id="name"
              name="lname"
              className="text-center shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Last name"
              autoComplete="off"
              required
              value={fullname.lname}
              onChange={handlefullname}
            />
          </div>
          <button
            type="submit"
            className=" rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-2"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default FormFullname;
