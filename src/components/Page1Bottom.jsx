import { useEffect } from "react";
import { gsap } from "gsap";
import React from "react";

function Page1Bottom() {
  useEffect(() => {
    // Rotate the images continuously
    gsap.to("#banner img", {
      rotate: 360,
      duration: 2,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center"
    });
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="absolute left-0 px-[10vh] flex items-end justify-between bottom-[3.3vw] w-full">
      <div>
        <h2 className="text-[1.4vw] font-[anzo2]">
          BRAND DESIGN | WEBSITE DESIGN
        </h2>
        <h3 className="text-[1.4vw] font-[anzo4] text-gray-400">
          BESPOKE FREELANCE
        </h3>
      </div>

      <div id="banner" className="">
        <img
          className="mb-[3vh] w-[11vh]"
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_148,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
          alt="Banner 1"
        />
        <img
          className="mb-[3vh] w-[11vh]"
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_148,h_148,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png"
          alt="Banner 2"
        />
      </div>
    </div>
  );
}

export default Page1Bottom;
