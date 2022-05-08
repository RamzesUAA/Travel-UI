import React, { useState } from "react";
import CancelButton from "../../unitilies/CancelButton";
import SaveButton from "../../unitilies/SaveButton";
import { createBaseApiAuth } from "../../ApiAgent";
import { useNavigate } from "react-router-dom";

const CreateTransportPage = () => {
  const [transport, setTransport] = useState();
  const navigate = useNavigate();

  const onCancelPressed = () => {
    navigate(-1);
  };

  const onSavePressed = () => {
    createBaseApiAuth()
      .post(`transport`, transport)
      .then(() => {
        navigate("/admin/transport");
      });
  };

  return (
    <div className="bg-white p-5 w-full rounded">
      <h2>Edit Transport</h2>
      <div>
        <form className="mt-8" action="#" method="POST">
          <div className="rounded-md shadow-sm -space-y-px my-4">
            <div>
              <label htmlFor="email-address" className="w-full">
                Transport number:
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) =>
                  setTransport({ ...transport, number: e.target.value })
                }
                className="appearance-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
                // placeholder="Email address"
              />
            </div>
          </div>
          <div className="rounded-md shadow-sm -space-y-px my-4">
            <div>
              <label htmlFor="email-address" className="w-full">
                Transport type:
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) =>
                  setTransport({ ...transport, type: e.target.value })
                }
                className="appearance-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
                // placeholder="Email address"
              />
            </div>
          </div>
          <div className="rounded-md shadow-sm -space-y-px my-4">
            <div>
              <label htmlFor="email-address" className="w-full">
                Transport model:
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) =>
                  setTransport({ ...transport, model: e.target.value })
                }
                className="appearance-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-between m-2 p-2">
          <CancelButton onClick={onCancelPressed}></CancelButton>
          <SaveButton onClick={onSavePressed}></SaveButton>
        </div>
      </div>
    </div>
  );
};

export default CreateTransportPage;
