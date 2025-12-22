import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState("");

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [generalError, setGeneralError] = useState("");

  const [errorStatus, setErrorStatus] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setErrorUsername("");
    setErrorStatus("");

    let hasError = false;

    if (username === "") {
      setErrorUsername("please enter username");
    }

    if (password === "") {
      setErrorPassword("please enter password");
    }
    if (hasError) return;

    try {
      const response = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });

      const { token, username:returnUsername, role } = response.data.data;
        localStorage.setItem("role", role);
        localStorage.setItem("authToken", token);
        localStorage.setItem("username", returnUsername);
      setSuccessMessage("Success: " + response.data.message);
      navigate("/"); 
      setUsername("");
      setPassword("");
    } catch (error) {
      if (error.response && error.response.data) {
        const { message, status } = error.response.data;
        if (status === "USERNAME_EXISTS") {
          setErrorUsername(message);
        } else if (status === "WRONG_PASSWORD") {
          setErrorPassword(message);
        } else if (status === "INACTIVE") {
          setErrorStatus(message);
        } else if (status === "SUSPENDED") {
          setErrorStatus(message);
        } else {
          setGeneralError(message);
        }
      }
    }
  };
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row min-h-screen bg-white">
        <div className="hidden md:flex md:w-1/2 bg-[#CBE4E8] items-center justify-center p-12">
          <img
            src="/assets/img/image_product.png"
            alt="Shopping Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 lg:p-24">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-black mb-2 tracking-tight">
              Log in to Munito
            </h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="border-b border-gray-300 focus-within:border-black transition-colors">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setErrorUsername("");
                  }}
                  placeholder="Username"
                  className="w-full py-2 outline-none text-black placeholder:text-gray-400"
                />
              </div>
              {errorUsername && <p style={{ color: "red" }}>{errorUsername}</p>}

              <div className="border-b border-gray-300 focus-within:border-black transition-colors">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorPassword("");
                  }}
                  placeholder="Password"
                  className="w-full py-2 outline-none text-black placeholder:text-gray-400"
                />
              </div>
              {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
              {generalError && <p style={{ color: "red" }}>{generalError}</p>}
              {errorStatus && <p style={{ color: "red" }}>{errorStatus}</p>}
              {successMessage && (<p style={{ color: "green" }}>{successMessage}</p>)}
              <button
                type="submit"
                className="w-full bg-[#003459] text-white py-4 rounded-md font-medium hover:bg-[#004b80] transition-colors mt-4"
              >
                Log in
              </button>

              <a href="http://localhost:8080/oauth2/authorization/google"
                type="button"
                className="w-full border border-gray-300 py-4 rounded-md font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google Icon"
                  className="w-5 h-5"
                />
                Sign in with google
              </a>
            </form>

             <div className="mt-8 text-center text-gray-600">
              don't have an account yet{" "}
              <a
                href="/Register"
                className="text-black font-medium border-b border-gray-400 hover:border-black pb-0.5"
              >
                Register
              </a>
            </div>

            <div className="mt-8 text-center text-gray-600">
              Forgot{" "}
              <a
                href="/ForgotPassword"
                className="text-black font-medium border-b border-gray-400 hover:border-black pb-0.5"
              >
                password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
