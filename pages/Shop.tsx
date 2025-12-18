import React from "react";
import { PlayCircle } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import {ArrowLeft} from "lucide-react";
import {ArrowRight} from "lucide-react";
export default function Shop() {
  return (
    <div className="p-4">
      <div
        style={{
          backgroundImage: "url('/assets/img/BannerShopNow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "400px",
        }}
        className="flex items-center p-9 justify-end"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-black text-[#ffff] leading-tight mb-4 uppercase text-right mb-3">
            One more friend
          </h1>
          <p className="text-[#ffff] text-5xl text-right mb-3">
            Thousands more fun!
          </p>
          <p className="text-[#CCD1D2] text-xs max-w-[400px] text-right ml-auto mb-3">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          <div className="flex flex-col sm:flex-row justify-end md:justify-end gap-4">
            <button className="flex items-center justify-center gap-2 border-2 border-[#ffffff] text-[#ffffff] px-8 py-3 rounded-full font-bold text-sm ">
              View Intro <PlayCircle size={18} />
            </button>
            <button className="bg-[#ffffff] text-[#003459] px-10 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* filter */}
        <div className="filter">
          <h5 className="py-8 font-bold text-[#003459] text-xl">Filter</h5>
          <div className="gender border-b border-[#CCD1D2] border-1 pb-4">
            <h6 className="font-bold text-base">Gender</h6>
            <div className="flex gap-3">
              <input type="checkbox" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
            </div>

            <div className="flex gap-3">
              <input type="checkbox" id="female" name="gender" value="male" />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          {/* Color */}
          <div className="color py-4 border-b border-[#CCD1D2] border-1">
            <h5>Color</h5>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="red" name="gender" value="male" />
              <div class="w-4 h-4 bg-[#FF564F] rounded-full"></div>
              <label htmlFor="red">Red</label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" id="apricot" name="gender" value="male" />
              <div class="w-4 h-4 bg-[#FFB672] rounded-full"></div>
              <label htmlFor="apricot">Apricot</label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" id="black" name="gender" value="male" />
              <div class="w-4 h-4 bg-[#242B33] rounded-full"></div>
              <label htmlFor="black">Black</label>
            </div>

            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="blackandwhite"
                name="color"
                value="blackandwhite"
                className="cursor-pointer accent-[#003459]"
              />

              {/* Hình tròn chia đôi dọc bằng Tailwind Arbitrary Value */}
              <div className="w-4 h-4 rounded-full border border-gray-300 bg-[linear-gradient(to_right,black_50%,white_50%)]"></div>

              <label
                htmlFor="blackandwhite"
                className="cursor-pointer text-sm font-medium text-[#003459]"
              >
                Black & White
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" id="silver" name="gender" value="male" />
              <div class="w-4 h-4 bg-[#CECECE] rounded-full"></div>
              <label htmlFor="silver">Silver</label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" id="tan" name="gender" value="male" />
              <div class="w-4 h-4 bg-[#FFF7CE] rounded-full"></div>
              <label htmlFor="tan">Tan</label>
            </div>
          </div>

          <div className="price py-4 border-b border-[#CCD1D2] border-1 ">
            <h5 className="mb-2">Price</h5>
            <div className="priceGroup">
              <input
                type="number"
                placeholder="Min"
                min="0"
                className="py-2 pl-2 border-b border-[#CCD1D2] border-1 mr-3 placeholder:text-black"
              />
              <input
                type="number"
                placeholder="Max"
                min="0"
                className="py-2 pl-2 border-b border-[#CCD1D2] border-1 placeholder:text-black"
              />
            </div>
          </div>

          {/* breed */}

          <div className="breed py-4">
            <h5>Breed</h5>
            <div className="flex gap-3">
              <input type="checkbox" id="small" name="gender" value="male" />
              <label htmlFor="small">Small</label>
            </div>

            <div className="flex gap-3">
              <input type="checkbox" id="medium" name="gender" value="male" />
              <label htmlFor="medium">Medium</label>
            </div>

            <div className="flex gap-3">
              <input type="checkbox" id="large" name="gender" value="male" />
              <label htmlFor="large">Large</label>
            </div>
          </div>
        </div>

        {/* list product */}
        <div className="list-product flex-1 ">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <h5 className="py-8 font-bold text-[#003459] text-xl">
                Small Dog
              </h5>
              <p className="font-medium text-sm text-[#667479]">52 puppies</p>
            </div>
            <button className="flex items-center justify-center gap-2 border-2 border-[#CCD1D2] text-[#667479] px-8 py-3 h-fit rounded-full font-bold text-sm hover:border-[#003459] hover:text-[#003459] transition-all">
              Sort by: Popular <ChevronDown size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
          {/* phân trang */}
          <ul className="pagination flex gap-5 mt-4 items-center">
            <li className="text=[#003459]"><ArrowLeft size={18}/></li>
            <li className="text-white bg-[#003459] py-1 px-3 rounded-md w-34 h-34 font-bold">
              1
            </li>
            <li className="text-[#003459] font-bold">2</li>
            <li className="text-[#003459] font-bold">3</li>
            <li className="text-[#003459] font-bold">4</li>
            <li className="text-[#003459] font-bold">...</li>
            <li className="text-[#003459] font-bold">24</li>
            <li><ArrowRight size={18}/></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
