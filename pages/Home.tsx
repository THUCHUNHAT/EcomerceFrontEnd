import React from "react";
import { PlayCircle } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { getAllPet } from "../api/petApi.tsx";
import { useState, useEffect } from "react";
import {getAllProduct} from "../api/productApi.tsx";
interface HeroBannerProps {}

const Home: React.FC<HeroBannerProps> = () => {
  const [pets, setPets] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchPets = async () => {
      const data = await getAllPet(0, 8);
      setPets(data.data.items);
    };
    fetchPets();
  }, []);
  
  
  return (
    <div>
      <div
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: "#FCEED5" }}
      >
        <div className=" p-4">
          <main className="relative flex flex-col md:flex-row items-center max-w-screen-xl mx-auto px-6 py-12 md:py-24 w-full min-h-[600px]">
            <div className="flex-1 z-10 text-center md:text-left mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-black text-[#003459] leading-tight mb-4 uppercase">
                One More Friend <br />
                <span className="text-[#003459] opacity-90">
                  Thousands More Fun!
                </span>
              </h1>
              <p className="text-[#242b33] text-sm md:text-base font-medium mb-8 max-w-md leading-relaxed">
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun. We have 200+
                different pets that can meet your needs!
              </p>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
                  View Intro <PlayCircle size={18} />
                </button>
                <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
                  Explore Now
                </button>
              </div>
            </div>

            <div className="flex-1 relative z-10 flex justify-center md:justify-end items-end h-full mt-10 md:mt-0">
              <div
                className="absolute bottom-0 right-0 w-full md:w-[90%] h-[75%] rounded-t-[60px] md:rounded-t-[80px] -z-10"
                style={{ backgroundColor: "#F7DBA7" }}
              />
              <img
                src="/assets/img/imgbanner.png"
                alt="Happy woman with dog"
                className="w-full max-w-[500px] md:max-w-[600px] object-contain select-none z-10"
              />
            </div>
          </main>
        </div>
      </div>
      {/* list product */}
      <div className=" p-4">
        <div className="flex justify-between items-end">
          <div className="content">
            <p className="text-base">What new?</p>
            <h5 className="text-2xl font-bold text-[#003459] mb-5">
              Take a look at some of our pets
            </h5>
          </div>
          <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 h-fit rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
            View more <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {pets.map((pet) => (
            <div
              key={pet.id}
              className="bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer w-full"
            >
              <img
                src={pet.imageUrl}
                alt={pet.name}
                className="w-full aspect-square object-cover rounded-lg mb-3"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "/assets/img/product.png";
                }}
              />

              <div className="px-2 pb-2">
                <h6 className="font-bold text-[#001E3C] leading-tight mb-1 truncate">
                  {pet.name} - {pet.breed}
                </h6>

                <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-2">
                  <span>
                    Gene:{" "}
                    <span className="font-bold text-gray-700">
                      {pet.gender}
                    </span>
                  </span>
                  <span className="text-[6px] opacity-40">●</span>
                  <span>
                    Age:{" "}
                    <span className="font-bold text-gray-700">
                      {pet.age} years
                    </span>
                  </span>
                </div>

                <h6 className="font-bold text-[#001E3C] text-sm">
                  {pet.price} VND
                </h6>
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex justify-between  w-full px-10 pt-10 rounded-3xl mt-10 overflow-hidden items-center" // Thêm items-end, đổi p-10 thành px và pt (bỏ pb)
          style={{
            backgroundImage: "url('/assets/img/Backround.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "400px", // Đảm bảo khung có đủ chiều cao
          }}
        >
          {/* Ảnh sẽ sát mép dưới nhờ items-end của thẻ cha và align-bottom */}
          <div className="flex items-end">
            <img
              src="/assets/img/kissdog.png"
              alt=""
              className="w-full max-w-[500px] md:max-w-[600px] object-contain select-none z-10 block align-bottom"
            />
          </div>
          {/* Phần nội dung cần có mb-10 để không bị dính sát đáy như cái ảnh */}
          <div className="content2 pb-10 text-right md:text-left">
            <p className="font-black text-5xl mb-2 text-[#003459]">
              One more friend
            </p>
            <p className="font-bold text-4xl mb-5 text-[#003459]">
              Thousands more fun!
            </p>
            <p className="max-w-md mb-8 text-gray-700">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex flex-col sm:flex-row justify-end md:justify-start gap-4">
              <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
                View Intro <PlayCircle size={18} />
              </button>
              <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end mt-16">
          <div className="content3">
            <p className="text-base">
              Hard to choose right products for your pets?
            </p>
            <h5 className="text-2xl font-bold text-[#003459] mb-5">
              Our Products
            </h5>
          </div>
          <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 h-fit rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
            View more <ChevronRight size={18} />
          </button>
        </div>

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

        <div className="flex mt-16 justify-between items-end">
          <p className="text-base">
            Proud to be part of{" "}
            <span className="text-2xl font-bold text-[#003459]">
              Pet Sellers
            </span>
          </p>
          <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 h-fit rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
            View all our sellers <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex gap-7">
          <img src="/assets/img/brand1.png" alt="" />
          <img src="/assets/img/brand2.png" alt="" />
          <img src="/assets/img/brand3.png" alt="" />
          <img src="/assets/img/brand4.png" alt="" />
          <img src="/assets/img/brand5.png" alt="" />
          <img src="/assets/img/brand6.png" alt="" />
          <img src="/assets/img/brand7.png" alt="" />
        </div>

        <div
          className="flex justify-between  w-full px-10 pt-10 rounded-3xl mt-10 overflow-hidden items-center" // Thêm items-end, đổi p-10 thành px và pt (bỏ pb)
          style={{
            backgroundImage: "url('/assets/img/Banner (2).png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "400px", // Đảm bảo khung có đủ chiều cao
          }}
        >
          {/* Phần nội dung cần có mb-10 để không bị dính sát đáy như cái ảnh */}
          <div className="content8 pb-10 text-right md:text-left">
            <p className="font-black text-5xl mb-2 text-[#003459]">
              One more friend
            </p>
            <p className="font-bold text-4xl mb-5 text-[#003459]">
              Thousands more fun!
            </p>
            <p className="max-w-md mb-8 text-gray-700">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex flex-col sm:flex-row justify-end md:justify-start gap-4">
              <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
                View Intro <PlayCircle size={18} />
              </button>
              <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
                Explore Now
              </button>
            </div>
          </div>
        </div>

        {/* tiltle news */}
        <div className="flex justify-between mt-16 items-center mb-8">
          <div>
            <p className="text-base">You already know ?</p>
            <p className="text-2xl font-bold text-[#003459] ">
              Useful pet knowledge
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 h-fit rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
            View more <ChevronRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl p-2">
            <img
              src="/assets/img/toypet.png"
              alt=""
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />
            <p
              className="px-1 py-1 text-[#1B87D3] rounded w-fit text-xs mb-2"
              style={{ backgroundColor: "#DAF0FF" }}
            >
              Pet knowledge
            </p>

            <h2 className="font-bold mb-2">
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </h2>
            <p>
              The Pomeranian, also known as the Pomeranian (Pom dog), is always
              in the top of the cutest pets. Not only that, the small, lovely,
              smart, friendly, and skillful circus dog breed.
            </p>
          </div>
          <div className="bg-white rounded-xl p-2">
            <img
              src="/assets/img/toypet.png"
              alt=""
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />
            <p
              className="px-1 py-1 text-[#1B87D3] rounded w-fit text-xs mb-2"
              style={{ backgroundColor: "#DAF0FF" }}
            >
              Pet knowledge
            </p>

            <h2 className="font-bold mb-2">
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </h2>
            <p>
              The Pomeranian, also known as the Pomeranian (Pom dog), is always
              in the top of the cutest pets. Not only that, the small, lovely,
              smart, friendly, and skillful circus dog breed.
            </p>
          </div>
          <div className="bg-white rounded-xl p-2">
            <img
              src="/assets/img/toypet.png"
              alt=""
              className="w-full aspect-square object-cover rounded-lg mb-3"
            />
            <p
              className="px-1 py-1 text-[#1B87D3] rounded w-fit text-xs mb-2"
              style={{ backgroundColor: "#DAF0FF" }}
            >
              Pet knowledge
            </p>

            <h2 className="font-bold mb-2">
              What is a Pomeranian? How to Identify Pomeranian Dogs
            </h2>
            <p>
              The Pomeranian, also known as the Pomeranian (Pom dog), is always
              in the top of the cutest pets. Not only that, the small, lovely,
              smart, friendly, and skillful circus dog breed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
