import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import Logo from "../../../public/img/svg/LOGO-ZW-BASELINE.svg";
import useGlobalState from "../../hooks/useGlobalState";
import clsx from "clsx";
import { useRouter } from "next/router";

const PageTransition = () => {
  const { initialLoad, setInitialLoad } = useGlobalState();
  const logoRef = useRef(null);
  const containerRefWhite = useRef(null);
  const containerRefPrimary = useRef(null);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", pageTransitionAnimation);
    // pageTransitionAnimation();
    console.log("page trans");
  }, []);

  const pageTransitionAnimation = () => {
    const pageTrans = gsap.timeline({
      onComplete: () => {
        pageTrans.pause(0);
      },
    });

    // gsap.set(containerRefWhite.current, {
    //   opacity: 1,
    // });
    // gsap.set(containerRefPrimary.current, {
    //   opacity: 1,
    // });

    pageTrans
      .to(containerRefPrimary.current, {
        scaleY: 1,
        duration: 1.5,
        ease: "power4.out",
        transformOrigin: "top",
      })
      .to(containerRefPrimary.current, {
        duration: 1.5,
        scaleY: 0,
        transformOrigin: "bottom",
      });
    //   .addLabel("whiteDone", ">")
    //   .to(
    //     containerRefPrimary.current,
    //     {
    //       duration: 1.5,
    //       ease: "power4.out",
    //       scaleY: 1,
    //       transformOrigin: "bottom",
    //     },
    //     "whiteDone-=1"
    //   )
    //   .addLabel("greenDone", ">")
    //   .to(
    //     logoRef.current,
    //     {
    //       opacity: 0,
    //       duration: 0.2,
    //     },
    //     "greenDone-=1.3"
    //   );
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
