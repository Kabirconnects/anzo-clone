import React from "react";

function Page6() {
  return (
    <div className="h-screen px-4 py-4">
      <div className="relative h-screen rounded-[2vw] object-contain overflow-hidden  bg-black shadow-xl shadow-gray-700">
        <video className='absolute h-full w-full object-cover' autoPlay loop muted src="/src/assets/file1.mp4"></video>

        <h1 className="absolute mt-[17vh] left-8 text-[35vw] uppercase font-[anzo5] text-white">
          About
        </h1>      
        </div>
    </div>
  );
}

export default Page6;
