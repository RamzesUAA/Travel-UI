import React from "react";

const SaveButton = ({ onClick }) => {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer h-10 items-center py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-3 w-30 px-8"
    >
      Save
    </a>
  );
};

export default SaveButton;
