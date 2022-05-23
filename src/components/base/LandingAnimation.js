import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useEffectOnce } from "../../hooks/useEffectOnce";
import { gsap } from "gsap/dist/gsap";
import Logo from "../../../public/img/svg/LOGO-ZW-BASELINE.svg";

const LandingAnimation = () => {
  const logoRef = useRef(null);
  const containerRefWhite = useRef(null);
  const containerRefPrimary = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(containerRefWhite.current, {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 1.5,
      delay: 1,
      ease: "power4.out",
    })
      .to(containerRefWhite.current, {
        duration: 0,
        opacity: 0,
        pointerEvents: "none",
      })
      .addLabel("whiteDone", ">")
      .to(
        containerRefPrimary.current,
        {
          duration: 1.5,
          ease: "power4.out",
          scaleY: 0,
          transformOrigin: "bottom",
          pointerEvents: "none",
        },
        "whiteDone-=1"
      )
      .addLabel("greenDone", ">")
      .to(
        logoRef.current,
        {
          opacity: 0,
          duration: 0.2,
          pointerEvents: "none",
        },
        "greenDone-=1.3"
      );
  }, []);

  return (
    <>
      <div
        ref={containerRefPrimary}
        className="fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen items-center justify-center bg-primary"
      ></div>
      <div
        ref={containerRefWhite}
        className="fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen items-center justify-center bg-white"
      ></div>
      <div
        ref={logoRef}
        className="fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen items-center justify-center"
      >
        <Logo className="w-96" />
      </div>
    </>
  );
};

export default LandingAnimation;
