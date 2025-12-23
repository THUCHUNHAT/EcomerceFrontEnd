import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [username, setUsername] = useState("");
  const [errorUsername, setErrorUsername] = useState("");

  const [fullName, setFullName] = useState("");
  const [errorFullName, setErrorFullName] = useState("");

  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [errorPhone, setErrorPhone] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorUsername("");
    setErrorFullName("");
    setErrorEmail("");
    setErrorPassword("");
    setErrorPhone("");
    setSuccessMessage("");
    setGeneralError("");

    let hasError = false;
    if (username === "") {
      setErrorUsername("Please enter the username.");
      hasError = true;
    }
    if (fullName === "") {
      setErrorFullName("Please enter the fullname.");
      hasError = true;
    }
    if (email === "") {
      setErrorEmail("Please enter the email.");
      hasError = true;
    }
    if (password === "") {
      setErrorPassword("Please enter the password.");
      hasError = true;
    }
    if (phone === "") {
      setErrorPhone("Please enter the phone.");
      hasError = true;
    }

    if (hasError) return;
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/registration", {
        username,
        fullName,
        email,
        password,
        phone,
      });
      setSuccessMessage("Success: " + response.data.message);
      navigate("/CheckEmail");
      setUsername("");
      setFullName("");
      setEmail("");
      setPassword("");
      setPhone("");
    } catch (error) {
      if (error.response && error.response.data) {
        const { message, status } = error.response.data;

        if (status === "USERNAME_EXISTS") {
          setErrorUsername(message);
        } else if (status === "EMAIL_EXISTS") {
          setErrorEmail(message);
        } else if (status === "PHONE_EXISTS") {
          setErrorPhone(message);
        } else {
          setGeneralError(message);
        }
      } else {
        setGeneralError(" Lỗi không xác định khi đăng ký");
      }
    } finally {
      setIsLoading(false);
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
              Create an account
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
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setErrorFullName("");
                  }}
                  placeholder="Fullname"
                  className="w-full py-2 outline-none text-black placeholder:text-gray-400"
                />
              </div>
              {errorFullName && <p style={{ color: "red" }}>{errorFullName}</p>}

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
              {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}

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

              <div className="border-b border-gray-300 focus-within:border-black transition-colors">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrorPhone("");
                  }}
                  placeholder="Phone"
                  className="w-full py-2 outline-none text-black placeholder:text-gray-400"
                />
              </div>
              {errorPhone && <p style={{ color: "red" }}>{errorPhone}</p>}

              {generalError && <p className="text-red-500">{generalError}</p>}
              {successMessage && (
                <p className="text-green-600">{successMessage}</p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full text-white py-4 rounded-md font-medium transition-colors mt-4 ${
                  isLoading ? "bg-gray-400" : "bg-[#003459] hover:bg-[#004b80]"
                }`}
              >
                {isLoading ? "Creating..." : "Create Account"}
              </button>
            </form>

            <div className="mt-8 text-center text-gray-600">
              Already have account?{" "}
              <a
                href="/login"
                className="text-black font-medium border-b border-gray-400 hover:border-black pb-0.5"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
