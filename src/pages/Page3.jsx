import React from "react";

function Page3() {
  return (
    <>
      <div className="h-screen relative flex justify-center items-center">
        <img
          className="absolute w-[70%] z-20"
          src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1871,h_1076,al_c,q_95,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png"
          alt=""
        />

        <video
          autoPlay
          loop
          muted
          className="absolute h-[32vw] w-[51vw] object-cover mb-8 z-10"
          src="/src/assets/file.mp4"
        ></video>

        <div className="h-[0.2vh] w-[65%] top-[45%] absolute z-0 bg-black"></div>
        <div className="h-[0.2vh] w-[80%] top-[60%] absolute z-0 bg-black"></div>
        <div className="h-[0.2vh] w-full top-[78%] absolute z-0 bg-black"></div>

      </div>
    </>
  );
}

export default Page3;
