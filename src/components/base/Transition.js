import React, { useEffect, useRef } from "react";
import clsx from "clsx";
import { gsap } from "gsap/dist/gsap";
import { Transition } from "react-transition-group";
import useGlobalState from "../../hooks/useGlobalState";
import { useRouter } from "next/router";

const TransitionLayout = ({ children }) => {
  const { changeSetIsTransitioning, isTransitioning } = useGlobalState();
  const router = useRouter();
  const containerRefPrimary = useRef(null);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      changeSetIsTransitioning(true);
    });
    // pageTransitionAnimation();
  }, [router]);

  const pageEnterTransition = () => {
    console.log("page trans");

    const pageTrans = gsap.timeline({
      onComplete: () => {
        pageTrans.pause(0);
      },
    });
    pageTrans
      .to(containerRefPrimary.current, {
        scaleY: 1,
        duration: 1.5,
        ease: "power4.out",
        transformOrigin: "top",
        onComplete: () => {
          changeSetIsTransitioning(false);
        },
      })
      .to(containerRefPrimary.current, {
        duration: 1.5,
        scaleY: 0,
        transformOrigin: "bottom",
      });
  };

  const pageExitTransition = () => {
    console.log("page trans");

    const pageTrans = gsap.timeline({
      onComplete: () => {
        pageTrans.pause(0);
      },
    });
    pageTrans.to(containerRefPrimary.current, {
      duration: 1.5,
      scaleY: 0,
      transformOrigin: "bottom",
    });
  };

  return (
    <>
      <Transition
        timeout={1500}
        onEnter={() => {
          pageEnterTransition();
          console.log("onEnter");
        }}
        onEntered={() => {
          console.log("onEntered");
          changeSetIsTransitioning(false);
        }}
        onEntering={() => {
          console.log("onEntering");
        }}
        onExited={() => {
          pageExitTransition();
          console.log("onExited");
        }}
        onExiting={() => {
          console.log("onExiting");
        }}
        onExit={() => {
          console.log("onExit");
        }}
        in={isTransitioning}
      >
        {children}
      </Transition>
      <div
        ref={containerRefPrimary}
        className={clsx(
          "pointer-events-none fixed top-0 bottom-0 left-0 right-0 z-[100] flex h-screen w-screen scale-y-0 transform items-center justify-center bg-primary"
        )}
      ></div>
    </>
  );
};

export default TransitionLayout;
