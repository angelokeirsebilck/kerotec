import React, { useRef, useEffect } from "react";
import SVG from "react-inlinesvg";

// Components
import Container from "../base/Container";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const USP = ({ content, usp }) => {
  const uspList = usp.globalSet.fieldKerotecUsp;
  const spacing =
    content.itemBackgroundColor === "white" ? "section" : "section-bg";

  const uspElements = useRef([]);

  useEffect(() => {
    uspElements.current.forEach((usp) => {
      gsap.from(usp, {
        scrollTrigger: {
          trigger: usp,
          start: "top 75%",
        },
        duration: 1.3,
        opacity: 0,
        y: 30,
      });
    });

    return () => {};
  }, []);

  return (
    <div
      className={
        content.itemBackgroundColor === "light"
          ? "relative overflow-hidden bg-primary-bg"
          : "relative overflow-hidden bg-white"
      }
    >
      <Container>
        <div
          className={`${spacing} usp grid grid-cols-1 gap-12 sm:grid-cols-2`}
        >
          {uspList.map((usp, index) => {
            return (
              <div
                className="flex justify-center"
                ref={(e) => (uspElements.current[index] = e)}
                key={index}
              >
                <div className="flex max-w-md flex-col items-center">
                  <SVG
                    src={`${usp.itemIcon[0].url}`}
                    height={70}
                    width="100%"
                    preProcessor={(code) =>
                      code.replace(/fill=".*?"/g, 'fill="#006134"')
                    }
                  />
                  <h2 className="my-4 text-center text-2xl font-medium md:text-3xl">
                    {usp.itemTitle}
                  </h2>
                  <span
                    className="inline-block text-center text-base tracking-1 text-body"
                    dangerouslySetInnerHTML={{ __html: usp.itemText }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default USP;
