import React from "react";

const TransporPage = () => {
  return (
    <div className="max-w-[1240px] mx-auto ">
      <div className="border-b border-gray-200 shadow">
        <table>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-2 text-xs text-gray-500">ID</th>
              <th className="px-6 py-2 text-xs text-gray-500">Name</th>
              <th className="px-6 py-2 text-xs text-gray-500">Email</th>
              <th className="px-6 py-2 text-xs text-gray-500">Created_at</th>
              <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
              <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">1</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Jon doe</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">jhondoe@example.com</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">1</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Jon doe</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">jhondoe@example.com</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                >
                  Delete
                </a>
              </td>
            </tr>
            <tr className="whitespace-nowrap">
              <td className="px-6 py-4 text-sm text-gray-500">1</td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">Jon doe</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500">jhondoe@example.com</div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">2021-1-12</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                >
                  Edit
                </a>
              </td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                >
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransporPage;
