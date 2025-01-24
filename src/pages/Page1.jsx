import React, { useRef, useState } from 'react'
import Page1Bottom from "../components/Page1Bottom";
import TiltText from "../components/TiltText";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";



function Page1() {

  const tiltRef = useRef(null)
  const [xVal, setXval] = useState(0);
  const [yVal, setYval] = useState(0);

  const mouseMoving = (e) => {
    setXval((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/30)
    setYval((e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/30)

    tiltRef.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
  };

  useGSAP(function() {
    gsap.to(tiltRef.current,{

      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: `power4.out`

    })
  }[xVal,yVal])

  return (
    <div id='page1'
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen relative bg-white px-4 py-4 "
    >
      <div id='page1-in' className=" relative shadow-xl p-14 shadow-gray-700 h-full w-full rounded-[35px]  bg-cover bg-center bg-[url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1251,h_439,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg')]">
        <img
          className="h-20 ml-5"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_144,h_144,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
          alt="logo"
        />

        <TiltText abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
}

export default Page1;
