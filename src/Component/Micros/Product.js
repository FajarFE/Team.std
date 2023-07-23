import React from "react";
import { navbar, gridblog, product } from "../../Contans"; // Remove the duplicate 'product' declaration

const ProductComponent = () => {
  console.log("Product Data:", product);

  return (
    <>
      {product.map((item, index) => (
        <section
          key={item.id} // Add a unique key for each mapped item
          className="container mx-auto sm:w-screen sm:h-screen md:w-screen md:h-auto lg:w-screen lg:h-screen flex md:justify-start md:items-start grid grid-cols-12 lg:gap-20  sm:my-20 lg:justify-center lg:items-center"
        >
          <div className={ `lg:gap-10 sm:pl-8 sm:col-span-12 lg:col-span-6 md:col-span-6 font-LexendDeca text-black md:px-5 flex flex-col gap-2 ${index % 2 === 0 ? 'md:order-last lg:order-last sm:order-last' : 'md:order-first lg:order-first sm:order-last'}`}>
            <p className=" sm:text-[32px] md:text-[35px] lg:text-[56px] font-bold">{item.title}</p>
            <p className="sm:text-[15px] lg:text-[20px] md:text-[16px] w-[90%] ">{item.paragraph}</p>
            <a className="flex gap-5 justify-start items-center mt-10 ">
              <a href="#" className="text-blue-600">Learn More</a>
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
          <div className={` sm:col-span-12 lg:col-span-6 md:col-span-6 relative flex sm:justify-start md:justify-center md:items-start lg:justify-center lg:items-center w-full h-full ${index % 2 === 0 ? 'md:order-first lg:order-first sm:order-first' : 'md:order-last lg:order-last sm:order-first'}`}>
            <img src={item.image} alt="" className="lg:w-[100%] lg:h-[80%] md:w-[100%] md:h-[90%] sm:w-[90%] sm:h-[95%] " />
          </div>
        </section>
      ))}
    </>
  );
};

export default ProductComponent;
