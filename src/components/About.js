import React from "react";

const About = () => {
  return (
    <div className="h-max lg:flex px-6 lg:px-20 py-10">
      <div className="w-full lg:w-1/2">
        <h3 className="text-white text-2xl lg:text-5xl lg:leading-[70px] mb-6">
          You do the business, we’ll handle the money.
        </h3>
        <p className="text-lg">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="font-medium text-[#00040E] start_btn p-3 rounded-[10px] mt-12">
          Get Started
        </button>
      </div>
      <div className="w-full lg:w-1/2 lg:pl-20 mt-4 lg:mt-0">
        {/* card 1 */}
        <div className="flex items-center antor hover:bg-gradient-to-br to-[#14101D] from-[#ffffff31] lg:p-5 py-5 rounded-[20px]">
          <div className="bg-[#09977c1a] w-max p-5 rounded-full ">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.4692 19.7122C25.0548 20.1138 24.8644 20.6946 24.9588 21.2642L26.3812 29.1362C26.5012 29.8034 26.2196 30.4786 25.6612 30.8642C25.114 31.2642 24.386 31.3122 23.7892 30.9922L16.7028 27.2962C16.4564 27.165 16.1828 27.0946 15.9028 27.0866H15.4692C15.3188 27.109 15.1716 27.157 15.0372 27.2306L7.94923 30.9442C7.59883 31.1202 7.20203 31.1826 6.81323 31.1202C5.86603 30.941 5.23403 30.0386 5.38923 29.0866L6.81323 21.2146C6.90763 20.6402 6.71723 20.0562 6.30283 19.6482L0.525225 14.0482C0.0420248 13.5794 -0.125975 12.8754 0.0948247 12.2402C0.309225 11.6066 0.856425 11.1442 1.51722 11.0402L9.46922 9.88663C10.074 9.82423 10.6052 9.45623 10.8772 8.91223L14.3812 1.72823C14.4644 1.56823 14.5716 1.42103 14.7012 1.29623L14.8452 1.18423C14.9204 1.10103 15.0068 1.03223 15.1028 0.976232L15.2772 0.912232L15.5492 0.800232H16.2228C16.8244 0.862632 17.354 1.22263 17.6308 1.76023L21.1812 8.91223C21.4372 9.43543 21.9348 9.79863 22.5092 9.88663L30.4612 11.0402C31.1332 11.1362 31.6948 11.6002 31.9172 12.2402C32.1268 12.8818 31.946 13.5858 31.4532 14.0482L25.4692 19.7122Z"
                fill="#00F6FF"
              />
            </svg>
          </div>
          <div className="lg:ml-8 ml-2">
            <h4 className="text-white font-semibold text-lg">Rewards</h4>
            <p>
              The best credit cards offer some tantalizing combinations of
              promotions and prizes
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex items-center antor hover:bg-gradient-to-br to-[#14101D] from-[#ffffff31] lg:p-5 py-5 rounded-[20px]">
          <div className="bg-[#09977c1a] w-max p-5 rounded-full ">
            <svg
              width="28"
              height="32"
              viewBox="0 0 28 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5649 31.8619C13.742 31.9544 13.9402 32.0015 14.1383 31.9999C14.3364 31.9984 14.5329 31.9497 14.7117 31.8556L20.4203 28.8039C22.0392 27.941 23.3069 26.9761 24.2959 25.8527C26.4463 23.4051 27.6205 20.2813 27.5996 17.0602L27.5319 6.43517C27.5255 5.21138 26.7217 4.11938 25.533 3.72243L14.9131 0.159303C14.2736 -0.0572148 13.5729 -0.0525079 12.9447 0.170286L2.36509 3.8605C1.18278 4.27314 0.393498 5.37298 0.399941 6.59834L0.467594 17.2155C0.488534 20.4413 1.70306 23.551 3.88889 25.9735C4.88758 27.0812 6.16654 28.032 7.80309 28.8808L13.5649 31.8619ZM12.0536 19.3743C12.292 19.6034 12.6013 19.7163 12.9106 19.7132C13.2198 19.7116 13.5275 19.5955 13.7627 19.3633L20.0012 13.213C20.47 12.7501 20.4651 12.0064 19.9916 11.5498C19.5164 11.0933 18.7513 11.0964 18.2825 11.5593L12.8929 16.8718L10.6861 14.7505C10.2109 14.294 9.44739 14.2987 8.97704 14.7615C8.50831 15.2244 8.51314 15.9681 8.98832 16.4246L12.0536 19.3743Z"
                fill="#00F6FF"
              />
            </svg>
          </div>
          <div className="lg:ml-8 ml-2">
            <h4 className="text-white font-semibold text-lg">100% Secured</h4>
            <p>
              We take proactive steps make sure your information and
              transactions are secure.
            </p>
          </div>
        </div>

        {/* card 3 */}
        <div className="flex items-center antor hover:bg-gradient-to-br to-[#14101D] from-[#ffffff31] lg:p-5 py-5 rounded-[20px]">
          <div className="bg-[#09977c1a] w-max p-5 rounded-full ">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.497 0.931172C30.6967 0.109757 29.5122 -0.196261 28.4077 0.125863L2.65319 7.61524C1.48791 7.93897 0.66197 8.8683 0.439479 10.0489C0.212186 11.2504 1.00611 12.7757 2.04334 13.4135L10.0962 18.3629C10.9222 18.8702 11.9882 18.743 12.6717 18.0537L21.8931 8.77488C22.3573 8.2917 23.1256 8.2917 23.5898 8.77488C24.0539 9.24196 24.0539 9.99895 23.5898 10.4821L14.3524 19.7625C13.6673 20.4503 13.5392 21.5213 14.0434 22.3524L18.9639 30.486C19.5401 31.4524 20.5325 32 21.621 32C21.749 32 21.8931 32 22.0211 31.9839C23.2696 31.8228 24.262 30.9692 24.6302 29.7612L32.2653 4.03967C32.6014 2.94445 32.2973 1.75259 31.497 0.931172Z"
                fill="#00F6FF"
              />
            </svg>
          </div>
          <div className="lg:ml-8 ml-2">
            <h4 className="text-white font-semibold text-lg">
              Balance Transfer
            </h4>
            <p>
              A balance transfer credit card can save you a lot of money in
              interest charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
