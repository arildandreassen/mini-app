import React from "react";
import "../css/Puppies.css";

function Puppies() {
  return (
    <div className={"puppy-container"}>
      <div className={"frame"}>
        <div>
          <img className={"picture"} src="/p1.webp" alt=""></img>
          <img className={"picture"} src="/p2.webp" alt=""></img>
          <img className={"picture"} src="/p3.jpg" alt=""></img>
          <img className={"picture"} src="/p4.jpg" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Puppies;
