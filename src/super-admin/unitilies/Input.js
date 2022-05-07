import React from "react";

const Input = ({ id, labelText, value, onChange, formType = "text" }) => {
  return (
    <div className="rounded-md shadow-sm -space-y-px my-4">
      <div>
        <label htmlFor={id} className="w-full">
          {labelText}
        </label>
        <input
          id={id}
          name={formType}
          type={formType}
          required
          value={value}
          onChange={(e) => {
            onChange?.(e.target.value);
          }}
          className="appearance-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
          // placeholder="Email address"
        />
      </div>
    </div>
  );
};

export default Input;
