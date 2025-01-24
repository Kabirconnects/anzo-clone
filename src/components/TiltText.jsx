import React from "react";

function TiltText(props) {
  return (
    <div id="tiltdiv" ref={props.abc} className="mt-[20vh]">
      <h1 className="text-[4.3vw] leading-[4vw] uppercase font-[anzo1]">
        I Am
        <span className="text-black font-[anzo1] ml-2 mr-0.3">DARK MODE</span>™
      </h1>

      <h1 className="text-[8.2vw] leading-[7vw] font-[anzo1] ">DESIGNER</h1>

      <h1 className="text-[4.3vw] leading-[4vw] uppercase font-[anzo1]">
        TO HIRE{" "}
      </h1>
    </div>
  );
}

export default TiltText;
