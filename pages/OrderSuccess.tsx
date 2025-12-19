import React from "react";
import { PlayCircle } from "lucide-react";
import { Trash } from "lucide-react";
export default function OrderSuccess() {
  return (
    <div className="p-4">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0DA487] ">Order Success</h1>
          <p className="">Order ID: 1708031724431131</p>
          <p className="py-5">Your order is confirmed is on the way</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* PHẦN BÊN TRÁI: Bảng sản phẩm (chiếm 2/3 hoặc flex-1) */}
          <div className="lg:flex-[2] overflow-x-auto">
            <div className="border  rounded-2xl p-4 min-w-[600px] bg-[#EBEEEF]">
              <table className="w-full text-left border-collapse ">
                <thead>
                  <tr className="text-[#667479] font-bold border-b border-[#CCD1D2]">
                    <th className="py-4">Product</th>
                    <th className="py-4">Price</th>
                    <th className="py-4 text-center">Qty</th>
                    <th className="py-4">Total</th>
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
                      <div className="flex items-center justify-center gap-3 px-3 py-1 w-fit mx-auto">
                        <p>1</p>
                      </div>
                    </td>
                    <td className="py-6 font-bold text-[#003459]">
                      140.000 VND
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PHẦN BÊN PHẢI: Cart Total (chiếm 1/3 hoặc cố định chiều rộng) */}
          <div className="lg:flex-1">
            <div className="sticky ">
              <div className="border  rounded-2xl p-6  top-4 bg-[#EBEEEF]">
                <h2 className="text-xl font-bold text-[#003459] mb-6">
                  Price Details
                </h2>

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
              </div>

              <div className="border  rounded-2xl p-6  top-4 bg-[#EBEEEF] my-8">
                <h2 className="text-xl font-bold text-[#003459] mb-6">
                  Shipping Address
                </h2>

                {/* Price Details */}
                <div className="space-y-4 text-[#003459]">
                  <div className="flex">
                    <span className="text-[#667479]">Recipient :</span>
                    <span className="text-[#667479]">Doan Thi Thu Ha</span>
                  </div>
                  <div className="flex">
                    <span className="text-[#667479]">Address :</span>
                    <span className="text-[#667479]">
                      123 Thanh Xuan, Thanh Xuan, Hanoi
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[#667479]">Phone :</span>
                    <span className="text-[#667479]">
                      {" "}
                      + 84 (0564) 53 - 29 - 68
                    </span>
                  </div>
                  <div className="flex">
                    <span className="text-[#667479]">Estimated arrival: :</span>
                    <span className="text-[#667479]"> 17 Jul 2023</span>
                  </div>
                  <button className="w-full border border-[#003459] text-[#003459] py-3 rounded-full font-bold hover:bg-[#f0f7ff] transition-all">
                    Track Order
                  </button>
                </div>
              </div>
              <div className="border  rounded-2xl p-6  top-4 bg-[#EBEEEF] my-8">
                <h2 className="text-xl font-bold text-[#003459] mb-6">
                  Payment Method
                </h2>
                <p className="text-[#667479]">
                  Cash on Delivery (Cash/Card). Cash on delivery (COD)
                  available. Card/Net banking acceptance subject to device
                  availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
