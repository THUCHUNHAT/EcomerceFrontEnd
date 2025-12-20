import React from "react";

export default function PasswordSetSuccessful() {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row min-h-screen bg-white gap-[200px] items-center">
        <div className="hidden md:flex md:w-1/2 bg-[#CBE4E8] items-center justify-center p-12">
          <img
            src="/assets/img/image_product.png"
            alt="Shopping Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>

        <div className="mt-8 text-center text-gray-600">
              Success{" "}
              <a
                href="/login"
                className="text-black font-medium border-b border-gray-400 hover:border-black pb-0.5"
              >
                Log in
              </a>
            </div>
      </div>
    </div>
  );
}
