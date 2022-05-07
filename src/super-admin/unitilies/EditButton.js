import React from "react";

const EditButton = ({ onClick }) => {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer h-10 items-center py-2 px-8 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-3 w-20"
    >
      Edit
    </a>
  );
};

export default EditButton;
