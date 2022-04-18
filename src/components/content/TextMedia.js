import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import parse from "html-react-parser";
import LinesDown from "../../../public/img/svg/lines-down.svg";
import LinesDownRight from "../../../public/img/svg/lines-down-right.svg";
import SparkBig from "../../../public/img/svg/spark-big.svg";

// Components
import Container from "../base/Container";
import ThemeButton from "../base/Button";

const MediaText = ({ content }) => {
  const contentPos =
    content.itemMediaPosition === "left" ? "col-start-7" : "col-start-1";
  const imgPos =
    content.itemMediaPosition === "left" ? "col-start-1" : "col-start-8";

  const spacing =
    content.itemBackgroundColor === "white" ? "section" : "section-bg";
  const textalign =
    content.itemTextAlignment === "center" ? "justify-center" : "";

  let showLinesDownLeft = false;
  if (
    content.itemBackgroundColor === "white" &&
    content.itemMediaPosition === "left"
  )
    showLinesDownLeft = true;

  let showLinesDownRight = false;
  if (
    content.itemBackgroundColor === "white" &&
    content.itemMediaPosition !== "left"
  )
    showLinesDownRight = true;

  let showSpark = false;
  if (content.itemBackgroundColor === "light") showSpark = true;

  const sparkPos =
    content.itemMediaPosition === "left" ? "left-0" : "-right-5/100";

  return (
    <div
      className={
        content.itemBackgroundColor === "light"
          ? "relative overflow-hidden bg-primary-bg"
          : "relative overflow-hidden bg-white"
      }
    >
      {showSpark && (
        <SparkBig
          className={`${sparkPos} absolute top-1/4 z-10 hidden scale-125 transform md:block`}
        />
      )}
      <Container>
        <div
          className={`${spacing} grid-flow-row-dense grid-cols-12 gap-6 md:grid`}
        >
          <div
            className={`${contentPos} ${textalign} col-span-6 flex flex-col`}
          >
            {/* <h2
              className="font-sans heading1-clamp mb-6 font-semibold tracking-3 md:mb-12"
              dangerouslySetInnerHTML={createTitleHTML()}
            /> */}
            <div className="prose-style ">
              {parse(content.itemText, { minWordLength: 10 })}
            </div>
            {content.itemLink.length > 0 && (
              <div className="mt-6 md:mt-12">
                <ThemeButton
                  className="btn-primary"
                  type="next"
                  href={`/${content.itemLink[0].itemLink[0].slug}`}
                  label={content.itemLink[0].itemLabel}
                />
              </div>
            )}
          </div>
          <div className={`${imgPos} relative col-span-5 mt-6 block md:mt-0`}>
            {showLinesDownLeft && (
              <LinesDown className="absolute -bottom-40 left-1/3 hidden md:block xl:-left-1/4" />
            )}
            {showLinesDownRight && (
              <LinesDownRight className="absolute -bottom-40 right-1/3 hidden md:block xl:-right-1/4" />
            )}
            <div className="image-container">
              <Image
                alt={content.itemImage[0].title}
                src={content.itemImage[0].url}
                layout="fill"
                className="image"
                sizes="(max-width: 374px) 342px,(max-width: 767px) 735px ,613px"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

MediaText.propTypes = {
  content: PropTypes.object.isRequired,
};

export default MediaText;