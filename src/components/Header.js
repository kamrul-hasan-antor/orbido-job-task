import React from "react";

const Header = () => {
  return (
    <div className="relative py-48 lg:py-0 lg:h-screen overflow-y-hidden overflow-x-hidden">
      <div className="orange_shade"></div>
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          <h3 className="uppercase text-4xl lg:text-7xl bg-gradient-to-r from-[#12BADF]  via-[#12BADF] to-[#C5018E] inline-block leading-10 text-transparent bg-clip-text font-bold">
            make your dream
          </h3>
          <br />
          <h3 className="uppercase text-4xl lg:text-7xl bg-gradient-to-r from-[#12BADF]  via-[#12BADF] to-[#C5018E] inline-block py-2 leading-10 text-transparent bg-clip-text font-bold">
            website Stand out
          </h3>
          <br />
          <h3 className="uppercase text-4xl lg:text-7xl bg-gradient-to-r from-[#12BADF]  via-[#12BADF] to-[#C5018E] inline-block leading-10 text-transparent bg-clip-text font-bold">
            in a crowed
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
