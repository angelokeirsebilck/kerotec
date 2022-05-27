import React from "react";
import PropTypes from "prop-types";
import Container from "../base/Container";
import Image from "next/image";
import ThemeButton from "../base/Button";
import HomeBannerImage from "../../../public/img/homebanner.jpg";

const HomeBanner = ({ content }) => {
  return (
    <Container>
      <div className="py-md-0  flex flex-col items-center gap-6 py-12 md:mt-0 md:grid md:h-[calc(100vh_-_8rem)] md:grid-cols-12">
        <div className="col-span-7 flex flex-col justify-center">
          <h1
            className="display1-clamp mb-4 font-semibold tracking-4 prose-strong:font-semibold prose-strong:text-primary md:mb-9"
            dangerouslySetInnerHTML={{ __html: content.itemTitle }}
          />

          <div
            className="text-xl font-medium prose-strong:font-semibold prose-strong:text-primary md:text-3xl"
            dangerouslySetInnerHTML={{ __html: content.itemIntro }}
          />
          {content.itemLink.length > 0 && (
            <div className="mt-6">
              <ThemeButton
                className="btn-secondary"
                type="scroll"
                href={`services`}
                label={content.itemLink[0].itemLabel}
              />
            </div>
          )}
        </div>
        <div className="relative col-span-5 mt-6 block w-full items-center md:mt-0">
          <Image
            alt="Home Figure"
            src={HomeBannerImage}
            layout="responsive"
            width={613}
            height={555}
            priority={true}
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
