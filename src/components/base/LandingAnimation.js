import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import Logo from "../../../public/img/svg/LOGO-ZW-BASELINE.svg";
import useGlobalState from "../../hooks/useGlobalState";
import clsx from "clsx";

const LandingAnimation = () => {
  const { initialLoad, setInitialLoad } = useGlobalState();
  const logoRef = useRef(null);
  const containerRefWhite = useRef(null);
  const containerRefPrimary = useRef(null);

  useEffect(() => {
    if (!initialLoad) {
      console.log("initial load false");
      landingAnimation();
    }
  }, []);

  const landingAnimation = () => {
    const landingTimeline = gsap.timeline({
      onComplete: () => setInitialLoad(true),
    });

    landingTimeline
      .to(containerRefWhite.current, {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1.5,
        delay: 1,
        ease: "power4.out",
      })
      .to(containerRefWhite.current, {
        duration: 0,
        opacity: 0,
      })
      .addLabel("whiteDone", ">")
      .to(
        containerRefPrimary.current,
        {
          duration: 1.5,
          ease: "power4.out",
          scaleY: 0,
          transformOrigin: "bottom",
        },
        "whiteDone-=1"
      )
      .addLabel("greenDone", ">")
      .to(
        logoRef.current,
        {
          opacity: 0,
          duration: 0.2,
        },
        "greenDone-=1.3"
      );
  };

  return (
    <>
      <div
        ref={containerRefPrimary}
        className={clsx(
          "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen items-center justify-center bg-primary",
          { "origin-top scale-y-0 transform opacity-0": initialLoad }
        )}
      ></div>
      <div
        ref={containerRefWhite}
        className={clsx(
          "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen items-center justify-center bg-white",
          { "origin-top scale-y-0 transform opacity-0": initialLoad }
        )}
      ></div>
      <div
        ref={logoRef}
        className={clsx(
          "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen items-center justify-center",
          { "opacity-0": initialLoad }
        )}
      >
        <Logo className="w-96" />
      </div>
    </>
  );
};

export default LandingAnimation;
