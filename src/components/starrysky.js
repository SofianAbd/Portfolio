import React, { useEffect, useRef } from "react";
import "./starrysky.scss";

const StarrySky = () => {
  const z1Ref = useRef(null);
  const z2Ref = useRef(null);
  const z3Ref = useRef(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const ratio = 0.05;

  useEffect(() => {
    const handleMouseMove = (e) => {
        xRef.current = e.pageX;
        yRef.current = e.pageY;
      };
      

      const animation = () => {
        if (z1Ref.current && z2Ref.current && z3Ref.current) {
          z1Ref.current.style.transform = `translate(${xRef.current * ratio}px, ${yRef.current * ratio}px)`;
          z2Ref.current.style.transform = `translate(${(xRef.current * ratio) / 2}px, ${(yRef.current * ratio) / 2}px) rotate(217deg)`;
          z3Ref.current.style.transform = `translate(${(xRef.current * ratio) / 3}px, ${(yRef.current * ratio) / 3}px) rotate(71deg)`;
        }
        requestAnimationFrame(animation);
      };
      

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animation);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg">
        <div className="z-3" ref={z3Ref}>
            <div className="tile top-left animate-opacity freq-5"></div>
            <div className="tile top-right animate-opacity freq-9"></div>
            <div className="tile bottom-left animate-opacity freq-7"></div>
            <div className="tile bottom-right animate-opacity freq-10"></div>
        </div>
        <div className="z-2" ref={z2Ref}>
            <div className="tile top-left animate-opacity freq-9 delay-2"></div>
            <div className="tile top-right animate-opacity freq-5 delay-2"></div>
            <div className="tile bottom-left animate-opacity freq-6 delay-4"></div>
            <div className="tile bottom-right animate-opacity freq-10 delay-4"></div>
        </div>
        <div className="z-1" ref={z1Ref}>
            <div className="tile top-left animate-opacity freq-7 delay-2"></div>
            <div className="tile top-right animate-opacity freq-5 delay-4"></div>
            <div className="tile bottom-left animate-opacity freq-9 delay-2"></div>
            <div className="tile bottom-right animate-opacity freq-5 delay"></div>
        </div>
    </div>
    );

};

export default StarrySky;
