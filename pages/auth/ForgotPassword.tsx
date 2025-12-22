import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmail("");

    let hasError = false;
    if (email === "") {
      setErrorEmail("Please enter the email.");
      hasError = true;
    }
    if (hasError) return;

    try {
      const response = await axios.post("http://localhost:8080/forgotpass",{email});
      setSuccessMessage("successs" + response.data.message);
      navigate("/CheckEmail");
      setEmail("");
    } catch (error) {
      if (error.response && error.response.data) {
        const { message } = error.response.data;
        setGeneralError(message);
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
              Forgot password
            </h1>
            <p className="text-gray-600 mb-8">Enter your details below</p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="border-b border-gray-300 focus-within:border-black transition-colors">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorEmail("");
                  }}
                  placeholder="Email"
                  className="w-full py-2 outline-none text-black placeholder:text-gray-400"
                />
              </div>

              {errorEmail && <p className="text-red-500">{errorEmail}</p>}
              {generalError && <p className="text-red-500">{generalError}</p>}
              {successMessage && <p className="text-green-500">{successMessage}</p>}
              <button
                type="submit"
                className="w-full bg-[#003459] text-white py-4 rounded-md font-medium hover:bg-[#004b80] transition-colors mt-4"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
