import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CancelButton from "../../unitilies/CancelButton";
import SaveButton from "../../unitilies/SaveButton";
import { createBaseApiAuth } from "../../ApiAgent";
import { useNavigate } from "react-router-dom";

const EditTransportPage = () => {
  const params = useParams();
  const [transport, setTransport] = useState();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    createBaseApiAuth()
      .get(`transport/${params.id}`)
      .then((res) => {
        setTransport(res.data);
        setLoader(false);
      });
    axios.get().then((res) => console.log(res));
  }, []);

  const onCancelPressed = () => {
    navigate(-1);
  };

  const onSavePressed = () => {
    createBaseApiAuth()
      .put(`transport`, transport)
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
              <label htmlFor="transport-number" className="w-full">
                Transport number:
              </label>
              <input
                id="transport-number"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={transport?.number}
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
              <label htmlFor="transport-type" className="w-full">
                Transport type:
              </label>
              <input
                id="transport-type"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={transport?.type}
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
              <label htmlFor="transport-model" className="w-full">
                Transport model:
              </label>
              <input
                id="transport-model"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={transport?.model}
                onChange={(e) =>
                  setTransport({ ...transport, model: e.target.value })
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
        </form>
        <div className="flex justify-between m-2 p-2">
          <CancelButton onClick={onCancelPressed}></CancelButton>
          <SaveButton onClick={onSavePressed}></SaveButton>
        </div>
      </div>
    </div>
  );
};

export default EditTransportPage;
