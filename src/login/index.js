import { useRef, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { createBaseApi } from "../super-admin/ApiAgent";
const LOGIN_URL = "auth/authenticate";

const LoginPage = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createBaseApi().post(
        LOGIN_URL,
        JSON.stringify({ Username: user, Password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.token;
      const roles = response?.data?.role;
      setAuth({
        user,
        roles,
        accessToken,
        firstName: response?.data?.firstName,
        lastName: response?.data?.lastName,
      });
      console.log("##############");
      console.log({ user, pwd, roles, accessToken });
      localStorage.setItem("token", accessToken);
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            TRAVEL_APP
          </h1>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  className="appearance-none rounded-none relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-t-md
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  className="appearance-none rounded-none relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-b-md
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
          py-2 px-4 border border-transparent text-sm font-medium
          rounded-md text-white bg-indigo-600 hover:bg-indigo-700
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form> */}
        </section>

        {/* <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-t-md
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block
            w-full px-3 py-2 border border-gray-300
            placeholder-gray-500 text-gray-900 rounded-b-md
            focus:outline-none focus:ring-indigo-500
            focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
          py-2 px-4 border border-transparent text-sm font-medium
          rounded-md text-white bg-indigo-600 hover:bg-indigo-700
          focus:outline-none focus:ring-2 focus:ring-offset-2
          focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );

  // return (
  // <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  //   <div className="max-w-md w-full space-y-8">
  //     <div>
  //       <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
  //         TRAVEL_APP
  //       </h1>
  //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
  //         Sign in to your account
  //       </h2>
  //     </div>
  //     <form className="mt-8 space-y-6" action="#" method="POST">
  //       <input type="hidden" name="remember" defaultValue="true" />
  //       <div className="rounded-md shadow-sm -space-y-px">
  //         <div>
  //           <label htmlFor="email-address" className="sr-only">
  //             Email address
  //           </label>
  //           <input
  //             id="email-address"
  //             name="email"
  //             type="email"
  //             autoComplete="email"
  //             required
  //             className="appearance-none rounded-none relative block
  //           w-full px-3 py-2 border border-gray-300
  //           placeholder-gray-500 text-gray-900 rounded-t-md
  //           focus:outline-none focus:ring-indigo-500
  //           focus:border-indigo-500 focus:z-10 sm:text-sm"
  //             placeholder="Email address"
  //           />
  //         </div>
  //         <div>
  //           <label htmlFor="password" className="sr-only">
  //             Password
  //           </label>
  //           <input
  //             id="password"
  //             name="password"
  //             type="password"
  //             autoComplete="current-password"
  //             required
  //             className="appearance-none rounded-none relative block
  //           w-full px-3 py-2 border border-gray-300
  //           placeholder-gray-500 text-gray-900 rounded-b-md
  //           focus:outline-none focus:ring-indigo-500
  //           focus:border-indigo-500 focus:z-10 sm:text-sm"
  //             placeholder="Password"
  //           />
  //         </div>
  //       </div>

  //       <div>
  //         <button
  //           type="submit"
  //           className="group relative w-full flex justify-center
  //         py-2 px-4 border border-transparent text-sm font-medium
  //         rounded-md text-white bg-indigo-600 hover:bg-indigo-700
  //         focus:outline-none focus:ring-2 focus:ring-offset-2
  //         focus:ring-indigo-500"
  //         >
  //           Sign in
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // </div>
  // );
};

export default LoginPage;
