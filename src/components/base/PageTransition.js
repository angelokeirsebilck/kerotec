import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import Logo from "../../../public/img/svg/LOGO-ZW-BASELINE.svg";
import useGlobalState from "../../hooks/useGlobalState";
import clsx from "clsx";
import { useRouter } from "next/router";

const PageTransition = () => {
  const { changeSetIsTransitioning, isTransitioning } = useGlobalState();
  const logoRef = useRef(null);
  const containerRefWhite = useRef(null);
  const containerRefPrimary = useRef(null);
  const router = useRouter();
  const pageTrans = gsap.timeline();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      pageEnterTransition();
    });
    router.events.on("routeChangeComplete", () => {
      pageExitTransition();
    });
  }, [router.events]);

  const pageEnterTransition = () => {
    console.log("enter trans");
    pageTrans.to(containerRefPrimary.current, {
      scaleY: 1,
      duration: 1.5,
      ease: "power4.out",
      transformOrigin: "top",
      onComplete: () => {
        changeSetIsTransitioning(false);
      },
    });
  };

  const pageExitTransition = () => {
    console.log("exit trans");
    pageTrans.to(containerRefPrimary.current, {
      duration: 1.5,
      scaleY: 0,
      transformOrigin: "bottom",
    });
  };

  return (
    <>
      <div
        ref={containerRefPrimary}
        className={clsx(
          "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-[100] flex h-screen w-screen scale-y-0 transform items-center justify-center bg-primary"
        )}
      ></div>
      {/* <div
        ref={containerRefWhite}
        className={clsx(
          "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen scale-y-0 transform items-center justify-center bg-white"
        )}
      ></div> */}
      {/* <div
        ref={logoRef}
        className={clsx(
          "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-50 flex h-screen w-screen items-center justify-center",
          { "opacity-0": initialLoad }
        )}
      >
        <Logo className="w-96" />
      </div> */}
    </>
  );
};

export default PageTransition;
