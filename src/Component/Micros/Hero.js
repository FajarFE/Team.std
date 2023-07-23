export default function hero (){
    return (
        <>
        <section className="container mx-auto w-full h-full flex sm:flex-col justify-start sm:items-center px-5 items-center grid grid-cols-12">
            <div className="sm:col-span-12 md:col-span-12 md:p-5 py-10 lg:col-span-6 font-LexendDeca text-white flex flex-col gap-2">
            <p className=" sm:leading-none sm:text-[40px] md:text-[50px] lg:text-[56px] font-bold">Instant collaboration for remote teams</p>
            <p className=" md:text-[18px] lg:text-[20px] md:w-[100%] lg:w-[70%] ">All-in-one place for your remote team to <br className="block md:hidden sm:hidden"/> chat, collaborate and <br className="hidden sm:bl"/> track project progress.</p>
            <div className="flex gap-3 md:mt-10 sm:mt-5 lg:mt-10 sm:flex-col lg:flex-row">
            <div className="relative lg:w-[50%] sm:w-full flex justify-center items-center ">
  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
    <svg
      className="w-5 h-5 text-gray-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </span>
  <input
    type="text"
    className="w-full focus:outline-none p-2 pl-3 rounded-sm"
    placeholder="Email"
  />
</div>

            <button className=" md:w-[50%] lg:w-[40%] text-[20px] p-1 bg-[#5468E7] rounded-sm">
                Get Early Access
            </button>
            </div>
            
            </div>
        </section>
        </>
    )
}