import React from 'react'

export default function Login() {
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

            <form className="space-y-6">
              <div className="border-b border-gray-300 focus-within:border-black transition-colors">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full py-2 outline-none text-black placeholder:text-gray-400"
                />
              </div>

              <div className="border-b border-gray-300 focus-within:border-black transition-colors">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 outline-none text-black placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#003459] text-white py-4 rounded-md font-medium hover:bg-[#004b80] transition-colors mt-4"
              >
                Log in
              </button>

              <button
                type="button"
                className="w-full border border-gray-300 py-4 rounded-md font-medium flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google Icon"
                  className="w-5 h-5"
                />
                Sign in with google
              </button>
            </form>

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
  )
}
