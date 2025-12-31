import React from "react";
import { ShoppingCart, MapPin, CreditCard } from "lucide-react";
interface Step {
  id: number;
  icon: React.ReactNode;
  isLast?: boolean;
}
export default function Checkout() {
  const steps: Step[] = [
    { id: 1, icon: <ShoppingCart size={24} className="text-blue-950" /> },
    { id: 2, icon: <MapPin size={24} className="text-blue-950" /> },
    {
      id: 3,
      icon: <CreditCard size={24} className="text-blue-950" />,
      isLast: true,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex bg-white gap-[20px]">
        <div className="flex flex-col items-center py-10  min-h-screen">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col">
              <div className="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center shadow-sm">
                {step.icon}
              </div>

              {!step.isLast && (
                <div className="flex flex-col items-center py-2">
                  <div className="w-2 h-2 rounded-full bg-orange-200 mb-1" />

                  <div className="w-[1px] h-32 bg-orange-200" />

                  <div className="w-2 h-2 rounded-full bg-orange-200 mt-1" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="information">
          <div className="Address bg-[#EBEEEF] rounded-[15px] p-5 mt-[40px]">
            <h2 className="text-2xl font-bold text-[#003459] mb-6">
              Delivery Address
            </h2>
            <div className="flex gap-[20px]">
              <div className="bg-[#FFFFFF] rounded-[15px] p-5 w-[300px] ">
                <p className="font-[700]">Doan Thi Thu Ha</p>
                <p>
                  <span>Address :</span> 123 Thanh Xuan, Thanh Xuan, Hanoi
                </p>
                <p>
                  <span>Phone :</span> + 84 (0564) 53 - 29 - 68
                </p>
              </div>

              <div className="bg-[#FFFFFF] rounded-[15px] p-5 w-[300px]">
                <p className="font-[700]">Add address</p>
              </div>
            </div>
          </div>

          <div className="Address bg-[#EBEEEF] rounded-[15px] p-5 mt-[40px]">
            <h2 className="text-2xl font-bold text-[#003459] mb-6">
              Delivery Option
            </h2>
            <div className="flex gap-[20px]">
              <div className="bg-[#FFFFFF] rounded-[15px] p-5 w-[300px]">
                <p className="font-[700]">Standard Delivery</p>
                <p>Estimated arrival 17 Jul 2023</p>
              </div>

              <div className="bg-[#FFFFFF] rounded-[15px] p-5 w-[300px]">
                <p className="font-[700]">Now</p>
                <p>Within 4 business hours after confirmation</p>
              </div>
            </div>
          </div>

          <div className="Address bg-[#EBEEEF] rounded-[15px] p-5 mt-[40px]">
            <h2 className="text-2xl font-bold text-[#003459] mb-6">
              Payment Option
            </h2>
            <label className="flex items-center justify-between bg-[#FFFFFF] rounded-[15px] p-5 cursor-pointer border-2 border-transparent has-[:checked]:border-blue-500 transition-all shadow-sm ">
              <p className="font-[700] text-gray-800">Online Banking</p>

              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-blue-500 transition-all cursor-pointer"
                />
                {/* Dấu chấm tròn xanh hiển thị khi được chọn */}
                <div className="absolute inset-0 m-auto w-3 h-3 bg-blue-500 rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
              </div>
            </label>

            <label className="flex items-center justify-between bg-[#FFFFFF] rounded-[15px] p-5 cursor-pointer border-2 border-transparent has-[:checked]:border-blue-500 transition-all shadow-sm mt-[20px]">
              <p className="font-[700] text-gray-800">Cash On Delivery</p>
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-blue-500 transition-all cursor-pointer"
                />
                {/* Dấu chấm tròn xanh hiển thị khi được chọn */}
                <div className="absolute inset-0 m-auto w-3 h-3 bg-blue-500 rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
              </div>
            </label>

            <label className="flex items-center justify-between bg-[#FFFFFF] rounded-[15px] p-5 cursor-pointer border-2 border-transparent has-[:checked]:border-blue-500 transition-all shadow-sm mt-[20px]">
              <p className="font-[700] text-gray-800">Credit or Debit Card</p>

              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-blue-500 transition-all cursor-pointer"
                />
                {/* Dấu chấm tròn xanh hiển thị khi được chọn */}
                <div className="absolute inset-0 m-auto w-3 h-3 bg-blue-500 rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
              </div>
            </label>

            <label className="flex items-center justify-between bg-[#FFFFFF] rounded-[15px] p-5 cursor-pointer border-2 border-transparent has-[:checked]:border-blue-500 transition-all shadow-sm mt-[20px]">
              <p className="font-[700] text-gray-800">Digital Wallet</p>

              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="payment-method"
                  className="peer appearance-none w-6 h-6 border-2 border-gray-300 rounded-full checked:border-blue-500 transition-all cursor-pointer"
                />
                {/* Dấu chấm tròn xanh hiển thị khi được chọn */}
                <div className="absolute inset-0 m-auto w-3 h-3 bg-blue-500 rounded-full scale-0 peer-checked:scale-100 transition-transform duration-200"></div>
              </div>
            </label>
          </div>
        </div>

        <div className="flex-1">
          <div className="order-summary bg-[#FDFDFD] rounded-[15px] p-5 mt-[40px] border border-[#FCEED5] ">
            <p className="text-[20px] font-[600] border-b-[1px] pb-[5px] w-full">
              Order Summery
            </p>

            <div className="space-y-4 text-[#003459] py-5 border-b-[1px] border-[#CCD1D2]">
               <div className="flex justify-between">
                <p className="text-[#4A5568]">Reflex Plus Adult... <span className="text-[#222222]">X 3</span></p>
                <p className="text-[#4A5568]">450.000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#4A5568]">Free Gift <span className="text-[#222222]">X 1</span></p>
                <p className="text-[#4A5568]">0</p>
              </div>
            </div>

            <div className="space-y-4 text-[#003459] py-4">
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
          <div className="offer p-5 bg-[#EBEEEF] rounded-[15px] mt-[20px] my-5">
            <p className="text-[16px] font-[700]">Special Offers</p>
            <div className="gift py-4">
              <p className="text-[#4A5568] text-[14px] py-1">
                Get special discounts with combo:
              </p>
              <p className="font-[700] text-[16px] py-1">
                NaturVet Dogs - Omega-Gold
              </p>
              <p className="font-[700] text-[16px] py-1">Plush Pet Toy</p>
            </div>
          </div>

          <button className="w-full bg-[#003459] text-white py-3 rounded-full font-bold hover:bg-[#002a48] transition-all">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
