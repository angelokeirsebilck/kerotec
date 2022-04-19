import React from "react";
import SVG from "react-inlinesvg";
import parse from "html-react-parser";

import { useInView } from "react-intersection-observer";
// Components
import Container from "../base/Container";

const USP = ({ content, usp }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const uspList = usp.globalSet.fieldKerotecUsp;

  const spacing = content.itemBackground === "white" ? "section" : "section-bg";

  return (
    <div className="" ref={ref}>
      {inView && (
        <div
          className={
            content.itemBackground === "light"
              ? "relative overflow-hidden bg-primary-bg"
              : "relative overflow-hidden bg-white"
          }
        >
          <Container>
            <div
              className={`${spacing} grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4`}
            >
              {uspList.map((usp, index) => {
                return (
                  <div className="flex flex-col items-center" key={index}>
                    <SVG
                      src={`${usp.itemIcon[0].url}`}
                      height={70}
                      width="100%"
                      preProcessor={(code) =>
                        code.replace(/fill=".*?"/g, 'fill="#fead1b"')
                      }
                    />

                    <span className="mt-6 inline-block text-center text-base font-semibold tracking-1 text-body">
                      {parse(usp.itemText)}
                    </span>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
};

export default USP;
