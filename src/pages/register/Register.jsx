import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
function Register() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [registerData, setRegisterData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleRegister = () => {
    setLoading(true);
    axios
      .post(
        "https://rentalcar-api.onrender.com/api/user/register",
        registerData,
        {
          headers: {
            "access-control-allow-origin": [
              "https://dreams-rent-agency.netlify.app/",
              "http://localhost:3000",
            ],
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setMessage("Your account was created successfuly");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((err) => {
        if (err.response.data.error.email) {
          setError(err.response.data.error.email.message);
          setLoading(false);
        } else {
          setError(err.response.data.error);
          setLoading(false);
        }
        setTimeout(() => {
          setError("");
        }, 10000);
        console.dir(err);
      });
  };
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                onChange={(e) => {
                  setRegisterData({
                    ...registerData,
                    [e.target.name]: e.target.value,
                  });
                }}
              >
                <div>
                  <label
                    for="fullName"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your FullName
                  </label>
                  <input
                    type="fullName"
                    name="fullName"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="FullName..."
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="(+216) 00 000 000"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>

                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      onClick={() => setShowPass(!showPass)}
                      aria-describedby="showPassword"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="showPassword"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      Show password{" "}
                    </label>
                  </div>
                </div>
                {error && (
                  <div
                    class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                    role="alert"
                  >
                    <div class="flex">
                      <div class="py-1">
                        <svg
                          class="fill-current h-6 w-6 text-teal-500 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                      </div>
                      <div>
                        <p class="font-bold">OOOOPPPS! 🤕</p>
                        <p class="text-sm">{error}</p>
                      </div>
                    </div>
                  </div>
                )}
                {message && (
                  <div
                    class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                    role="alert"
                  >
                    <div class="flex">
                      <div class="py-1">
                        <svg
                          class="fill-current h-6 w-6 text-teal-500 mr-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                        </svg>
                      </div>
                      <div>
                        <p class="font-bold">{message} 🥳</p>
                        <p class="text-sm">
                          You will be redirect to the login page
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <button
                  className="bg-primary p-4 min-w-[150px] rounded-lg font-bold text-sm"
                  onClick={() => {
                    handleRegister();
                  }}
                  type="button"
                >
                  {loading ? (
                    <PulseLoader color="rgba(0, 0, 0, 0.68)" size={8} />
                  ) : (
                    "Create an account"
                  )}
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    onClick={() => {
                      setTimeout(() => {
                        navigate("/login");
                      }, 1000);
                    }}
                    href="#/"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
