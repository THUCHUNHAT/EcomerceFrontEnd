import React from "react";
import { Check } from "lucide-react";
// import footer from "../components/Footer/footer";
interface Step {
  id: number;
  label: string;
  time: string;
  status: "completed" | "current" | "pending";
}
const steps: Step[] = [
  { id: 1, label: "Order Confirmed", time: "05:43 AM", status: "completed" },
  { id: 2, label: "Order Preparation", time: "01:21 PM", status: "completed" },
  { id: 3, label: "Shipping", time: "Pending", status: "current" },
  { id: 4, label: "Delivered", time: "Pending", status: "pending" },
];

export default function Tracking() {
  return (
    <div>
      <div className="p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#003459] ">
            Your order is on the way
          </h1>
          <p className="">Order ID: 1708031724431131</p>
          <p className="py-5">Your order is confirmed is on the way</p>
        </div>
        <div className="w-full max-w-4xl mx-auto p-8 font-sans">
          <div className="relative flex items-center justify-between">
            <div className="absolute left-0 top-[18px] h-[3px] w-full bg-gray-300 -z-10" />

            <div
              className="absolute left-0 top-[18px] h-[3px] bg-teal-500 -z-10 transition-all duration-500"
              style={{ width: "66%" }}
            />
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center flex-1">
                <div className="relative flex items-center justify-center">
                  {step.status === "completed" && (
                    <div className="w-9 h-9 bg-teal-500 rounded-full flex items-center justify-center text-white border-4 border-white shadow-sm">
                      <Check size={20} strokeWidth={3} />
                    </div>
                  )}

                  {step.status === "current" && (
                    <div className="w-9 h-9 bg-white border-[3px] border-teal-500 rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 bg-teal-500 rounded-full shadow-inner" />
                    </div>
                  )}

                  {step.status === "pending" && (
                    <div className="w-9 h-9 bg-slate-400 rounded-full border-4 border-white shadow-sm" />
                  )}
                </div>

                <div className="mt-4 text-center">
                  <p
                    className={`text-sm font-semibold ${
                      step.status === "pending"
                        ? "text-slate-500"
                        : "text-slate-700"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {step.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-5 mt-[50px]">
            <div className="bg-[#F8F8F8] rouded-[4px] p-9">
              <div className="flex gap-3 w-[200px]">
                <img src="/assets/img/box2.svg" alt="" />
                <div className="content-tracking">
                  <p>Tracking Code</p>
                  <h1>1708031724431131</h1>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rouded-[4px] p-9">
              <div className="flex gap-3  w-[200px]">
                <img src="/assets/img/box2.svg" alt="" />
                <div className="content-tracking">
                  <p>Service</p>
                  <h1>1708031724431131</h1>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rouded-[4px] p-9">
              <div className="flex gap-3  w-[200px]">
                <img src="/assets/img/box2.svg" alt="" />
                <div className="content-tracking">
                  <p>Package Info</p>
                  <h1>Letter</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-[50px]">
            <div className="bg-[#F8F8F8] rouded-[4px] p-9">
              <div className="flex gap-3  w-[200px]">
                <img src="/assets/img/box2.svg" alt="" />
                <div className="content-tracking">
                  <p>From</p>
                  <h1>ABC Store, 456 Cau Giay, Cau Giay, Hanoi</h1>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rouded-[4px] p-9">
              <div className="flex gap-3 w-[200px]">
                <img src="/assets/img/box2.svg" alt="" />
                <div className="content-tracking">
                  <p>Tracking Code</p>
                  <h1>
                    Doan Thi Thu Ha, + 84 53291168, 123 Thanh Xuan, Thanh Xuan,
                    Hanoi
                  </h1>
                </div>
              </div>
            </div>

            <div className="bg-[#F8F8F8] rouded-[4px] p-9">
              <div className="flex gap-3 w-[200px]">
                <img src="/assets/img/box2.svg" alt="" />
                <div className="content-tracking">
                  <p>Estimated Time</p>
                  <h1>17 Jul - 23 Jul, 2023</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end md:justify-center gap-4 my-7">
            <button className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all">
              Return to Shopping
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-[#003459] text-[#003459] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#003459] hover:text-white transition-all">
              Track other Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
