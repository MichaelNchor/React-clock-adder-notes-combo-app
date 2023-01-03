import React from "react";

function Card(props) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl">
        <h4 className="text-center font-mono text-white text-xl">
          {props._id}
        </h4>
        <a href="#">
          <img className="rounded-t-lg" src={props.img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>
          <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <li>{props.contact}</li>
            <li>{props.email}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
