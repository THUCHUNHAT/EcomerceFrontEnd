import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CheckEmail() {
  const [token, setToken] = useState("");
  const [errorToken, setErrorToken] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [generalError, setGeneralError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToken("");

    let hasError = false;
    if (token === "") {
      setToken("Please enter the username.");
      hasError = true;
    }

    if (hasError) return;
    try {
      const response = await axios.post(
        `http://localhost:8080/registration/tokenConfirmation?token=${token}`
      );
      setSuccessMessage("successs" + response.data.message);
      navigate("/Login")
      setToken("");
    } catch (error) {
      if (error.response && error.response.data) {
        const { message, status } = error.response.data;

        if (status === "INVALID_TOKEN") {
          setErrorToken(message);
        } else if (status == "USER_NOT_FOUND") {
          setErrorToken(message);
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
              Check your email
            </h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="border-b border-gray-300 focus-within:border-black transition-colors">
                <input
                  type="text"
                  value={token}
                  onChange={(e) => {
                    setToken(e.target.value);
                    setErrorToken("");
                  }}
                  placeholder="Token"
                  className="w-full py-2 outline-none text-black placeholder:text-gray-400"
                />
              </div>

              {errorToken && <p className="text-red-500"> {errorToken}</p>}
              {generalError && <p className="text-red-500">{generalError}</p>}
              {successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#003459] text-white py-4 rounded-md font-medium hover:bg-[#004b80] transition-colors mt-4"
              >
                Verify Code
              </button>
            </form>

            <div className="mt-8 text-center text-gray-600">
              Haven’t got the email yet?{" "}
              <a
                href="/ForgotPassword"
                className="text-black font-medium border-b border-gray-400 hover:border-black pb-0.5"
              >
                Resend email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
