import React from "react";
import { mockup, navbar, gridblog, product } from "../../Contans";

const MockupComponent = () => {
  console.log(mockup);
  console.log("Product Data:", product);
  return (
    <>
      <section className="container mx-auto w-scree lg:h-screen md:h-auto flex justify-start sm:my-20 items-center grid grid-cols-12 md:my-10">
        <div className="md:col-span-12 lg:order-first sm:order-last sm:col-span-12 md:order-last lg:col-span-5 font-LexendDeca md:mt-10 md:px-10 text-black flex flex-col gap-2 sm:px-5">
          <p className="sm:text-[35px] lg:text-[56px] md:text-[45px] font-bold">{mockup[0].h1}</p>
          <p className="lg:text-[20px] md:text-[15px] lg:w-[90%] md:w-[100%]">{mockup[0].text}</p>
          <a className="flex gap-5 justify-start items-center mt-10 ">
            <p className="text-blue-600">Learn More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="9"
              viewBox="0 0 20 9"
              fill="none"
            >
              <path
                d="M15.1484 3.25486H1.38593C0.698425 3.25486 0.135925 3.81736 0.135925 4.50486C0.135925 5.19236 0.698425 5.75486 1.38593 5.75486H15.1484V7.99236C15.1484 8.55486 15.8234 8.82986 16.2109 8.42986L19.6859 4.94236C19.9234 4.69236 19.9234 4.30486 19.6859 4.05486L16.2109 0.567359C15.8234 0.167358 15.1484 0.454859 15.1484 1.00486V3.25486Z"
                fill="#5468E7"
              />
            </svg>
          </a>
        </div>
        <div className="md:col-span-12 sm:col-span-12  lg:col-span-6 md relative flex justify-center items-center  w-full h-full sm:mb-5">
          <div className="lg:absolute md:block md:-mr-[310px] sm:-mr-[380px] -ml-[80px] overflow-hidden ">
            <img
              src={mockup[0].image}
              alt=""
              className="sm:h-[600px] sm:w-[600px] lg:h-[100%] lg:w-[100%] md:w-[70%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MockupComponent;
