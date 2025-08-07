import React from "react";
import { assets } from "../assets/assests";

const Footer = () => {
    return (
        
        <footer className=" relative flex flex-col items-center justify-center w-full pb-15 bg-gradient-to-b from-[#587d8f] to-[#2f4157] text-white/70">
            <img
                    src={assets.bg_image3}
                    alt=""
                    className=" absolute right-0 h-full top-0  w-[300px] opacity-70 pointer-events-none select-none z-0"
                  />
                  <img
                    src={assets.footer_image2}
                    alt=""
                    className=" absolute left-0 h-full top-0  w-[300px] opacity-70 pointer-events-none select-none z-0"
                  />
            <img src={assets.footer_image} alt="" className="z-10 my-2"/>

            <p className=" text-center text-background z-10">Copyright © 2025 <a href="https://prebuiltui.com">ShiftCode</a>. All rights reservered.</p>
            <div className="flex items-center gap-4 mt-5 z-10">
  {/* Instagram */}
  <a
  href="https://www.instagram.com/shiftcode_/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:-translate-y-0.5 transition-all duration-300 "
>
  <i
    className="fa-brands fa-instagram"
    style={{ width: 24, height: 24, fontSize: 24}}
  ></i>
</a>


  {/* WhatsApp */}
  <a
  href="https://wa.me/96176113085"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:-translate-y-0.5 transition-all duration-300"
>
  <i className="fa-brands fa-whatsapp" style={{ width: 24, height: 24, fontSize: 24 }}></i>
</a>
  {/* GitHub */}
  <a
  href="https://github.com/shiftcode-lb"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:-translate-y-0.5 transition-all duration-300"
>
  <i
    className="fa-brands fa-github"
    style={{ width: 24, height: 24, fontSize: 24 }}
  ></i>
</a>
</div>
        </footer>
    );
};
export default Footer