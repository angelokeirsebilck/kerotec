import React from "react";
import PropTypes from "prop-types";
import Container from "../base/Container";
import Image from "next/image";
import parse from "html-react-parser";
import HomeBannerImage from "../../../public/img/homebanner.jpeg";

const HomeBanner = ({ content }) => {
  return (
    <Container>
      <div className="py-md-0  flex flex-col items-center gap-6 py-12 md:mt-0 md:grid md:h-[calc(100vh_-_8rem)] md:grid-cols-12">
        <div className="col-span-7 flex flex-col justify-center">
          <h1 className="display1-clamp mb-4 font-semibold tracking-4 prose-strong:font-semibold prose-strong:text-primary md:mb-9">
            {parse(content.itemTitle)}
          </h1>

          <div className="text-xl font-medium prose-strong:font-medium prose-strong:text-primary md:text-3xl">
            {parse(content.itemIntro)}
          </div>
        </div>
        <div className="relative col-span-5 mt-6 block w-full items-center md:mt-0">
          <Image
            alt="Home Figure"
            src={HomeBannerImage}
            layout="responsive"
            width={613}
            height={555}
            priority
            sizes="(max-width: 374px) 342px, (max-width: 450px) 403px,(max-width: 575px) 527px, (max-width: 767px) 735px ,613px"
            placeholder="blur"
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
