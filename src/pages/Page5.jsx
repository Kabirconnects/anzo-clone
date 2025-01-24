import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function page2() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".rotateText2", {
      transform: "rotateX(90deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: "#section3",
        start: "top 60%",
        end: "top -250%",
        scrub: 2,
        markers: false,
      },
    });
  }, []);

  return (
    <>
      <div id="section3" className=" bg-white text-center p-20">
        <div className="rotateText2 ">
          <h1 className="text-[40vw] text-black font-[anzo5] uppercase leading-[35vw]">
            HELPING
          </h1>
        </div>

        <div className="rotateText2 ">
          <h1 className="text-[40vw] text-gray-500 font-[anzo5] uppercase leading-[35vw]">
            MY
          </h1>
        </div>

        <div className="rotateText2 ">
          <h1 className="text-[40vw] text-black font-[anzo5] uppercase leading-[35vw]">
            CLIENTS
          </h1>
        </div>

        <div className="rotateText2 ">
          <h1 className="text-[40vw] text-black font-[anzo5] uppercase leading-[35vw]">
            TO ACHIEVE
          </h1>
        </div>

        <div className="rotateText2 ">
          <h1 className="text-[40vw] text-gray-500 font-[anzo5] uppercase leading-[35vw]">
            THERE
          </h1>
        </div>

        <div className="rotateText2 ">
          <h1 className="text-[40vw] text-black font-[anzo5] uppercase leading-[35vw]">
            DREAMS!
          </h1>
        </div>
      </div>
    </>
  );
}

export default page2;
