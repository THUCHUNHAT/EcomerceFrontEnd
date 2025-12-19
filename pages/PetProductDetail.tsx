import React from "react";

export default function PetProductDetail() {
  return (
    <div className="p-4">
      <div className="flex gap-5 bg-white pl-2 pr-9 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow ">
        <div className="image-product">
          <img src="/assets/img/eat1.png" alt="" />
          <div className="list-image flex gap-2 mt-3">
            <img src="/assets/img/eat.png" alt="" />
            <img src="/assets/img/eat.png" alt="" />
            <img src="/assets/img/eat2.png" alt="" />
            <img src="/assets/img/eat3.png" alt="" />
            <img src="/assets/img/eat4.png" alt="" />
          </div>
        </div>
        <div className="infor-product flex-1">
          <h5 className="font-bold text-[#003459] text-xl">
            NaturVet Dogs - Omega-Gold Plus Salmon Oil{" "}
          </h5>
          <h5 className="font-bold text-[#003459] text-lg">
            350.000 VND{" "}
            <span className="text-[12px] text-[#4A5568] font-[400]">
              <s>399.000 VND</s>
            </span>{" "}
            <span className="text-[15px] font-[500] text-[#0DA487]">
              (12% off){" "}
            </span>
          </h5>

          <div className="interact flex justify-between">
            <div className="flex gap-1">
              <img src="/assets/img/light.svg" alt="" className="w-[16px]" />
              <img src="/assets/img/light.svg" alt="" className="w-[16px]" />
              <img src="/assets/img/light.svg" alt="" className="w-[16px]" />
              <img src="/assets/img/light.svg" alt="" className="w-[16px]" />
              <img src="/assets/img/null.svg" alt="" className="w-[16px]" />
              <p className="text-[#4A5568] text-[12px]">23 Customer Review</p>
            </div>

            <div className="social-network flex gap-[20px] ">
              <img src="/assets/img/share.svg" alt="" />
              <img src="/assets/img/Facebook.svg" alt="" />
              <img src="/assets/img/Twitter.svg" alt="" />
              <img src="/assets/img/Instagram.svg" alt="" />
              <img src="/assets/img/youtube.svg" alt="" />
            </div>
          </div>

          <div className="group-button flex justify-between mt-[40px]">
            <div className="quantity bg-[#FFE7BA] border-[#FFE7BA] border-1 w-[200px] h-[48px] rounded-[50px] flex items-center justify-between">
              <button className="w-[45px] h-[45px] rounded-full bg-[#003459] text-[#FFFFFF] text-[23px]">
                +
              </button>
              <p>1</p>
              <button className="w-[45px] h-[45px] rounded-full bg-[#003459] text-[#FFFFFF] text-[23px]">
                -
              </button>
            </div>
            <button className="bg-[#003459] text-white px-[150px] py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
              Add To Cart
            </button>
          </div>

          <ul className="infor mt-[30px]">
            <li>
              <div className="flex  border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>SKU</p>
                </div>
                <p>:2305511</p>
              </div>
            </li>
            <li>
              <div className="flex   border-b border-[#CCD1D2] border-1 py-4 ">
                <div className="w-[200px]">
                  <p>Lifestage</p>
                </div>
                <p>:All Lifestages</p>
              </div>
            </li>

            <li>
              <div className="flex border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Brand</p>
                </div>
                <p>:NaturVet</p>
              </div>
            </li>

            <li>
              <div className="flex  border-b border-[#CCD1D2] border-1 py-4">
                <div className="w-[200px]">
                  <p>Days to Ship</p>
                </div>
                <p>:Ship Next Business Day</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white pl-2 pr-9 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow mt-[20px]">
        <div className="flex gap-3 border-b border-[#CCD1D2] border-1 py-4 w-[500px] text-[14px]">
          <a
            href=""
            className="bg-white text-[#00528C] border border-[#00528C] px-6 py-2 rounded-l-[5px] transition-all duration-300 ease-in-out inline-block font-medium hover:bg-[#00528C] hover:text-white hover:shadow-md"
          >
            Details
          </a>
          <a
            href=""
            className="bg-white text-[#00528C] border border-[#00528C] px-6 py-2  transition-all duration-300 ease-in-out inline-block font-medium hover:bg-[#00528C] hover:text-white hover:shadow-md"
          >
            Ingredients
          </a>
          <a
            href=""
            className="bg-white text-[#00528C] border border-[#00528C] px-6 py-2 transition-all duration-300 ease-in-out inline-block font-medium hover:bg-[#00528C] hover:text-white hover:shadow-md"
          >
            Directions
          </a>
          <a
            href=""
            className="bg-white text-[#00528C] border border-[#00528C] px-6 py-2 rounded-r-[5px] transition-all duration-300 ease-in-out inline-block font-medium hover:bg-[#00528C] hover:text-white hover:shadow-md"
          >
            Reviews
          </a>
        </div>

        <div className="description">
          <h6>Description</h6>
          <p>
            Please note that the product information displayed is provided by
            manufacturers, suppliers and other third parties and is not
            independently verified by Petco. Full disclaimer here. NaturVet No
            Scoot Dog Soft Chews, Pack of 60 chews - Helps support healthy anal
            gland function - Helps support normal bowel function - For dogs over
            12 weeks old - Soft chews
          </p>
        </div>
      </div>
      <div className="bg-white pl-2 pr-9 py-2 rounded-xl shadow-md hover:shadow-lg transition-shadow mt-[20px]">
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
                <img src="/assets/img/Frame.svg" alt="" class="w-5 h-5" />
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
