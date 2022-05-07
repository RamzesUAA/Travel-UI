import React from "react";

const CancelButton = ({ onClick }) => {
  return (
    <a
      onClick={onClick}
      className="cursor-pointer h-10 items-center py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 m-3 w-30 px-8"
    >
      Cancel
    </a>
  );
};

export default CancelButton;
