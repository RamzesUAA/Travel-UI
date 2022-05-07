import React from "react";

const AddButton = ({ onClick, ...rest }) => {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer h-10 items-center py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-3 w-30 px-8"
      {...rest}
    >
      Add
    </a>
  );
};

export default AddButton;
