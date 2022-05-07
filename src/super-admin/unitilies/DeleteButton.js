import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer h-10 items-center py-2 px-8 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 m-3 w-20"
    >
      Delete
    </a>
  );
};

export default DeleteButton;
