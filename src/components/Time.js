import React, { useState } from "react";

function Time() {
  let now = new Date();
  let [time, setTime] = useState("Time");

  function getTime() {
    setTime((time) => now.toLocaleTimeString());
  }

  //   setInterval(getTime, 1000);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl flex flex-col justify-center items-center space-y-6 w-48 p-5">
      <h1 className="text-2xl text-white">{time}</h1>
      <button
        type="button"
        className=" rounded-lg text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 m-2"
        onClick={getTime}
      >
        Get time
      </button>
    </div>
  );
}

export default Time;
