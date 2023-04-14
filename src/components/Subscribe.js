import React from "react";

const Subscribe = () => {
  return (
    <div className="h-max lg:flex px-6 lg:px-20 py-10">
      <div className="lg:flex lg:px-24 justify-between py-10 bg-gradient-to-br to-[#ffffff31] via-[#6d6d6d36] from-[#11101dfd]">
        <div className="lg:w-5/6 ">
          <h4 className="text-white text-5xl font-semibold">
            Let's try our service now!
          </h4>
          <p className="lg:w-1/2 mt-6">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div>
          <button className="font-medium text-[#00040E] start_btn p-3 rounded-[10px] mt-12">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
