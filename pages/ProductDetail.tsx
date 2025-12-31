import React from "react";
import { MessageSquareMore } from "lucide-react";
export default function ProductDetail() {
  return (
    <div className="p-4">
      <div className="flex gap-5 bg-white pl-2 pr-9 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <div className="image-product">
          <img src="/assets/img/image_product.png" alt="" />
          <div className="list-image flex gap-2 mt-3">
            <img src="/assets/img/image 3.png" alt="" />
            <img src="/assets/img/image 3.png" alt="" />
            <img src="/assets/img/image 3.png" alt="" />
            <img src="/assets/img/image 3.png" alt="" />
            <img src="/assets/img/image 3.png" alt="" />
          </div>

          <div className="bg-[#FFE7BA] flex gap-2 px-2 py-2 mt-3 rounded-lg items-center mt-7 mb-7">
            <img src="/assets/img/icon-heart.svg" alt="" />
            <p>100% health guarantee for pets</p>
            <img src="/assets/img/nhim.svg" alt="" />
            <p>100% guarantee of pet identification</p>
          </div>

          <div className="flex gap-6">
            <img src="/assets/img/share.png" alt="" />
            <img src="/assets/img/Facebook - Negative.png" alt="" />
            <img src="/assets/img/Twitter - Negative.png" alt="" />
            <img src="/assets/img/intagram.png" alt="" />
            <img src="/assets/img/YouTube - Negative.png" alt="" />
          </div>
        </div>
        <div className="infor-product flex-1">
          <h5 className="font-bold text-[#003459] text-xl">Shiba Inu Sepia</h5>
          <h5 className="font-bold text-[#003459] text-lg">34.000.000 VND</h5>
          <div className="flex flex-col sm:flex-row justify-end md:justify-start gap-4 my-7">
            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
              Contact us
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
              <MessageSquareMore size={18} /> Chat with Munito
            </button>
          </div>

          <ul className="border-b border-[#CCD1D2] border-1 pb-[50px]">
            <li>
              <div className="flex   border-b border-[#CCD1D2] border-1 py-4 ">
                <div className="w-[200px]">
                  <p>Gender</p>
                </div>
                <p>:Female</p>
              </div>
            </li>

            <li>
              <div className="flex border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Age</p>
                </div>
                <p>: 2 Months</p>
              </div>
            </li>

            <li>
              <div className="flex  border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Size</p>
                </div>
                <p>: Small</p>
              </div>
            </li>

            <li>
              <div className="flex  border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Color</p>
                </div>
                <p>: Appricot & Tan</p>
              </div>
            </li>

            <li>
              <div className="flex  border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Vaccinated</p>
                </div>
                <p>: Yes</p>
              </div>
            </li>

            <li>
              <div className="flex  border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Cert</p>
                </div>
                <p>: Yes (MKA)</p>
              </div>
            </li>

            <li>
              <div className="flex  border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Gender</p>
                </div>
                <p>:Female</p>
              </div>
            </li>

            <li>
              <div className="flex  border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Additional Information</p>
                </div>
                <div className=" flex gap-1">
                  <p>:</p>
                  <p className="w-[200px]">
                    Pure breed Shih Tzu. Good body structure. With MKA cert and
                    Microchip. Father from champion lineage.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* feedback */}
      <div className="feeback mt-[60px]">
        <h5 className="font-bold text-[#003459] text-xl mb-[20px]">
          Our lovely customer
        </h5>
        <div className="flex gap-2">
          <img alt="" src="/assets/img/feedback1.png" />
          <img alt="" src="/assets/img/feedback2.png" />
          <img alt="" src="/assets/img/feedback3.png" />
          <img alt="" src="/assets/img/feedback4.png" />
          {/* <img alt="" src="/assets/img/feedback4.png" /> */}
        </div>
      </div>

      {/* products in the same category */}

      <div className="suggest mt-[60px]">
        <p className="text-base">What new?</p>
        <h5 className="text-2xl font-bold text-[#003459] mb-5">
          Take a look at some of our pets
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-9">
          {/* Card Item */}
          <div className="bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            {/* Image: Để w-full để nó chiếm hết chiều rộng card, aspect-square để ảnh vuông */}
            <img
              src="/assets/img/product.png"
              alt="Pomeranian White"
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />

            {/* Content Container: Thêm padding nhỏ để text không dính sát mép */}
            <div className="px-2 pb-2">
              <h6 className="font-bold text-[#001E3C] leading-tight mb-1">
                MO231 - Pomeranian White
              </h6>

              <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-2">
                <span>
                  Gene: <span className="font-bold text-gray-700">Male</span>
                </span>
                <span className="text-[6px] opacity-40">●</span>
                <span>
                  Age:{" "}
                  <span className="font-bold text-gray-700">02 months</span>
                </span>
              </div>

              <h6 className="font-bold text-[#001E3C] text-sm">
                6.900.000 VND
              </h6>
            </div>
          </div>

          {/* Card Item */}
          <div className="bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            {/* Image: Để w-full để nó chiếm hết chiều rộng card, aspect-square để ảnh vuông */}
            <img
              src="/assets/img/toypet.png"
              alt="Pomeranian White"
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />

            {/* Content Container: Thêm padding nhỏ để text không dính sát mép */}
            <div className="px-2 pb-2">
              <h6 className="font-bold text-[#001E3C] leading-tight mb-1">
                Costumes Chicken Drumsti ck Headband
              </h6>

              <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-2">
                <span>
                  Product:{" "}
                  <span className="font-bold text-gray-700">Costume</span>
                </span>
              </div>
              <h6 className="font-bold text-[#001E3C] text-sm">
                6.900.000 VND
              </h6>

              <div
                className="flex gap-6 rounded-md items-center text-sm pt-2 pb-2 pl-2 mt-3"
                style={{ backgroundColor: "#FCEED5" }}
              >
                <img src="/assets/img/Frame.svg" alt="" className="w-5 h-5" />
                <p className="font-bold">Free Cat Food</p>
              </div>
            </div>
          </div>

          {/* Card Item */}
          <div className="bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            {/* Image: Để w-full để nó chiếm hết chiều rộng card, aspect-square để ảnh vuông */}
            <img
              src="/assets/img/product.png"
              alt="Pomeranian White"
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />

            {/* Content Container: Thêm padding nhỏ để text không dính sát mép */}
            <div className="px-2 pb-2">
              <h6 className="font-bold text-[#001E3C] leading-tight mb-1">
                MO231 - Pomeranian White
              </h6>

              <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-2">
                <span>
                  Gene: <span className="font-bold text-gray-700">Male</span>
                </span>
                <span className="text-[6px] opacity-40">●</span>
                <span>
                  Age:{" "}
                  <span className="font-bold text-gray-700">02 months</span>
                </span>
              </div>

              <h6 className="font-bold text-[#001E3C] text-sm">
                6.900.000 VND
              </h6>
            </div>
          </div>

          {/* Card Item */}
          <div className="bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
            {/* Image: Để w-full để nó chiếm hết chiều rộng card, aspect-square để ảnh vuông */}
            <img
              src="/assets/img/product.png"
              alt="Pomeranian White"
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />

            {/* Content Container: Thêm padding nhỏ để text không dính sát mép */}
            <div className="px-2 pb-2">
              <h6 className="font-bold text-[#001E3C] leading-tight mb-1">
                MO231 - Pomeranian White
              </h6>

              <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-2">
                <span>
                  Gene: <span className="font-bold text-gray-700">Male</span>
                </span>
                <span className="text-[6px] opacity-40">●</span>
                <span>
                  Age:{" "}
                  <span className="font-bold text-gray-700">02 months</span>
                </span>
              </div>

              <h6 className="font-bold text-[#001E3C] text-sm">
                6.900.000 VND
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
