import React from "react";
import { assets } from "../assets/assests";

const Footer = () => {
    return (
        
        <footer className=" relative flex flex-col items-center justify-center w-full pb-15 bg-gradient-to-b from-[#587d8f] to-[#2f4157] text-white/70">
            <img
                    src={assets.bg_image3}
                    alt=""
                    className=" absolute right-0 h-full top-0  w-[300px] opacity-100 pointer-events-none select-none"
                  />
                  <img
                    src={assets.footer_image2}
                    alt=""
                    className=" absolute left-0 h-full top-0  w-[300px] opacity-100 pointer-events-none select-none"
                  />
            <img src={assets.footer_image} alt=""/>

            <p className=" text-center text-background">Copyright © 2025 <a href="https://prebuiltui.com">ShiftCode</a>. All rights reservered.</p>
            <div className="flex items-center gap-4 mt-5">
                <a href="#" className="hover:-translate-y-0.5 transition-all duration-300 text-background">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href="#" className="hover:-translate-y-0.5 transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 18c-4.51 2-5-2-7-2" stroke="#fff" strokeOpacity=".5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
            </div>
        </footer>
    );
};
export default Footer