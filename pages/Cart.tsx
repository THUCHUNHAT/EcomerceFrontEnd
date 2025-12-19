import React from "react";
import { Trash } from "lucide-react";
import {PlayCircle} from "lucide-react";
export default function Cart() {
  return (
    <div className="p-4">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-[#003459] mb-6">
          Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* PHẦN BÊN TRÁI: Bảng sản phẩm (chiếm 2/3 hoặc flex-1) */}
          <div className="lg:flex-[2] overflow-x-auto">
            <div className="border border-[#FCEED5] rounded-2xl p-4 min-w-[600px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[#667479] font-bold border-b border-[#CCD1D2]">
                    <th className="py-4">Product</th>
                    <th className="py-4">Price</th>
                    <th className="py-4 text-center">Qty</th>
                    <th className="py-4">Total</th>
                    <th className="py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#CCD1D2]">
                  {/* Map qua danh sách sản phẩm ở đây */}
                  <tr className="border-b border-[#CCD1D2] last:border-0">
                    <td className="py-6 flex items-center gap-4">
                      <img
                        src="pet-food.png"
                        className="w-16 h-16 rounded-lg"
                      />
                      <div>
                        <p className="font-bold text-[#003459]">
                          Reflex Plus Adult Dog Food...
                        </p>
                        <p className="text-sm text-[#667479]">Food • 385gm</p>
                      </div>
                    </td>
                    <td className="py-6 text-[#003459] font-bold">140.000</td>
                    <td className="py-6">
                      <div className="flex items-center justify-center gap-3 border border-[#003459] rounded-full px-3 py-1 w-fit mx-auto">
                        <button className="text-[#003459]">+</button>
                        <span>1</span>
                        <button className="text-[#003459]">-</button>
                      </div>
                    </td>
                    <td className="py-6 font-bold text-[#003459]">
                      140.000 VND
                    </td>
                    <td className="py-6 text-right">
                      <button className="text-[#FF564E] hover:scale-110 transition-transform">
                        <Trash />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PHẦN BÊN PHẢI: Cart Total (chiếm 1/3 hoặc cố định chiều rộng) */}
          <div className="lg:flex-1">
            <div className="border border-[#FCEED5] rounded-2xl p-6 sticky top-4">
              <h2 className="text-xl font-bold text-[#003459] mb-6">
                Cart Total
              </h2>

              {/* Coupon Section */}
              <div className="flex gap-2 p-2 border border-[#003459] rounded-lg mb-6">
                <input
                  type="text"
                  placeholder="Coupon/voucher here"
                  className="flex-1 outline-none bg-transparent px-2"
                />
                <button className="bg-[#FCEED5] text-[#003459] px-4 py-2 rounded-md font-bold hover:bg-[#f7e1bc] transition-colors">
                  Apply
                </button>
              </div>

              {/* Price Details */}
              <div className="space-y-4 text-[#003459]">
                <div className="flex justify-between">
                  <span className="text-[#667479]">Subtotal</span>
                  <span className="font-bold text-[#003459]">420.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#667479]">Coupon Discount</span>
                  <span className="font-bold">(-) 0.00</span>
                </div>
                <div className="flex justify-between pb-4 border-b border-[#CCD1D2]">
                  <span className="text-[#667479]">Shipping</span>
                  <span className="font-bold">30.000</span>
                </div>
                <div className="flex justify-between text-lg pt-2">
                  <span className="font-bold">Total (VND)</span>
                  <span className="font-bold text-[#00A78E] text-xl">
                    450.000
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button className="w-full bg-[#003459] text-white py-3 rounded-full font-bold hover:bg-[#002a48] transition-all">
                  Checkout
                </button>
                <button className="w-full border border-[#003459] text-[#003459] py-3 rounded-full font-bold hover:bg-[#f0f7ff] transition-all">
                  Return to shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </div>
    // </div>
  );
}
