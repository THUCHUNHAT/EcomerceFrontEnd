import React from "react";
import { MessageSquareMore } from "lucide-react";
export default function ProductDetail() {
  return (
    <div className="p-4">
      <div className="flex gap-5 bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
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
        <div className="infor-product">
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

          <div className="flex gap-5">
            <ul>
              <li>
                Gender <span>:</span>
              </li>
              <li>Age <span>:</span></li>
              <li>Size <span>:</span></li>
              <li>Color<span>:</span></li>
              <li>Vaccinated<span>:</span></li>
              <li>Dewormed<span>:</span></li>
              <li>Cert<span>:</span></li>
              <li>Microchip<span>:</span></li>
              <li>Location<span>:</span></li>
              <li>Published Date<span>:</span></li>
              <li>Additional Information<span>:</span></li>
            </ul>

            <ul>
              <li>Female</li>
              <li>2 Months</li>
              <li>Small</li>
              <li>Appricot & Tan</li>
              <li>Yes</li>
              <li>Yes</li>
              <li>Yes (MKA)</li>
              <li>Yes</li>
              <li>Vietnam</li>
              <li>12-Oct-2022</li>
              <li className="max-w-[200px]">
                Pure breed Shih Tzu. Good body structure. With MKA cert and
                Microchip. Father from champion lineage.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h5>Our lovely customer</h5>
    </div>
  );
}
