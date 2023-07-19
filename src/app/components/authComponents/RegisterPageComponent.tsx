"use client";

import CarouselComponent from "../CarouselComponent";
import RegisterForm from "./RegisterForm";

export default function RegisterPageComponent() {
  return (
    <div className="h-screen w-full flex ">
      <div className="w-1/2 h-full bg-[#4b70ff] flex items-center justify-end ">
        <div className="h-[80%] w-[92%] bg-[#f7fafc] rounded-l-3xl flex justify-center items-center">
          <div className="w-3/4 h-[400px] relative">
            <CarouselComponent />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-[#e6ecf5] flex items-center justify-start">
        <div className="h-[80%] w-[92%] bg-[#ffffff] rounded-r-3xl flex items-center justify-center">
          <div className="bg-[#f7fafc] px-4 py-8 text-black rounded-2xl max-w-[380px]">
            <p className="font-bold text-center mt-2 text-xl tracking-wide">
              Create your account
            </p>
            <p className="text-center text-sm mt-1 text-[#6a6b70]">
              It's easy and free
            </p>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
