import React from 'react';

const CTASection = () => {
  return (
    <div className="relative w-full my-4 overflow-hidden">
      <div className="bg-primary relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#000_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="section-x relative py-16 flex flex-col items-center text-center gap-4">
          <span className="font-Plus-Jakarta-Sans text-background/70 text-2xl tracking-[3px] uppercase">Why Choose Us</span>
          <span className="text-background text-5xl leading-none font-serif">&ldquo;</span>
          <h3 className="text-light text-l md:text-3xl font-bold max-w-2xl leading-snug -mt-2">
            Empowering businesses with innovative technology, thoughtful design, and reliable digital solutions.
          </h3>
          <span className="text-background/70 text-base mt-2">— The ShiftCode Team</span>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
