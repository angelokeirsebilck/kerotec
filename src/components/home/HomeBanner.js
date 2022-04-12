import React from "react";
import PropTypes from "prop-types";
import Container from "../base/Container";
import Image from "next/image";
import parse from "html-react-parser";

const HomeBanner = ({ content: fieldHomeBannerKerotec }) => {
  const homeBanner = fieldHomeBannerKerotec.fieldHomeBannerKerotec[0];

  return (
    <Container>
      <div className="md:grid gap-6 md:grid-cols-12 md:h-[calc(100vh_-_8rem)] flex flex-col items-center">
        <div className="col-span-7 flex flex-col justify-center">
          <h1 className="display1-clamp strong-primary font-semibold mb-4 md:mb-9 tracking-4 prose-strong:text-primary prose-strong:font-semibold">
            {parse(homeBanner.itemTitle)}
          </h1>

          <div className="font-medium strong-primary text-xl md:text-3xl prose-strong:text-primary prose-strong:font-medium">
            {parse(homeBanner.itemIntro)}
          </div>
        </div>
        <div className="col-span-5 block items-center mt-6 md:mt-0 relative w-full">
          <Image
            alt="Home Figure"
            src={homeBanner.itemImage[0].url}
            layout="responsive"
            width={613}
            height={555}
            priority
            sizes="(max-width: 374px) 342px,(max-width: 767px) 735px ,613px"
          />
        </div>
      </div>
    </Container>
  );
};

export default HomeBanner;

HomeBanner.propTypes = {
  content: PropTypes.object,
};
