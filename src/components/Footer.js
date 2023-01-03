import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-center md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year} All Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default Footer;
