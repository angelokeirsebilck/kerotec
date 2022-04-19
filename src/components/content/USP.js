import React from "react";
import SVG from "react-inlinesvg";
import parse from "html-react-parser";

// Components
import Container from "../base/Container";

const USP = ({ content, usp }) => {
  const uspList = usp.globalSet.fieldKerotecUsp;
  const spacing =
    content.itemBackgroundColor === "white" ? "section" : "section-bg";

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
  );
};

export default USP;
