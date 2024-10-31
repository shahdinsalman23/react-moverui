import useAuth from "hooks/useAuth";
import { useState } from "react";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { login, errors, isLogin, navigate, loading, spinner } = useAuth();

  if (isLogin) {
    navigate("/");
    window.location.reload();
  }

  if (loading) {
    return spinner();
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    //send the details to the backend
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login(email, password);
  };

  return (
    <section>
      <div className="flex items-center justify-center overflow-hidden min-">
        <div className="flex flex-col px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-xl mx-auto lg:w-96">
            <div>
              <a href="/" className="font-bold text-primary-green text-medium">
                Movers
              </a>
              <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                Sign in.
              </h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form action="#" onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        // onChange={(e) => setEmail(e.target.value)}
                        required=""
                        placeholder="Your Email"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Password{" "}
                    </label>
                    <div className="flex mt-1">
                      <input
                        id="password"
                        name="password"
                        type={passwordVisible ? "text" : "password"}
                        // onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required=""
                        placeholder="Your Password"
                        className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-s-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                      <div
                        onClick={() => setPasswordVisible(!passwordVisible)}
                        className="flex items-center px-4 transition duration-500 ease-in-out transform border-none bg-gray-50 rounded-e-lg hover:cursor-pointer hover:bg-gray-100"
                      >
                        {passwordVisible ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-primary-green"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-primary-green"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  {errors.length > 0 &&
                    errors.map((error, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 text-teal-900 transition duration-500 ease-in-out transform bg-teal-100 border-t-4 border-teal-500 rounded shadow-md"
                        role="alert"
                      >
                        <div className="flex">
                          <div className="py-1">
                            <svg
                              className="w-6 h-6 mr-4 text-teal-500 fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold">Error!</p>
                            <p className="text-sm">{error}</p>
                          </div>
                        </div>
                      </div>
                    ))}

                  <div>
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform border-none bg-primary-green rounded-xl hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <div className="relative my-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-neutral-600">
                      {" "}
                      Or create account{" "}
                    </span>
                  </div>
                </div>

                <div>
                  <a
                    href="/signup"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center transition duration-500 ease-in-out transform border-none bg-black-800 text-primary-green rounded-xl hover:bg-black-600 hover:text-primary-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    <div className="flex items-center justify-center">
                      <span className="ml-4"> Get Started</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
