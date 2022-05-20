import React from "react";
import Container from "../base/Container";
import { hyphenateSync } from "hyphen/nl";

// Hooks
import useSwiperRef from "../../hooks/useSwiperRef";

import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import ButtonPrev from "../swiper/ButtonPrev";
import ButtonNext from "../swiper/ButtonNext";

const References = ({ content }) => {
  const [nextEl, nextElRef] = useSwiperRef();
  const [prevEl, prevElRef] = useSwiperRef();

  return (
    <div
      className={
        content.itemBackgroundColor === "light"
          ? "section-bg relative overflow-hidden bg-primary-bg"
          : "section relative overflow-hidden bg-white"
      }
    >
      <Container>
        <div className="relative">
          <h2 className="font-sans heading1-clamp mb-6 font-semibold tracking-3 md:mb-12">
            {hyphenateSync(content.itemTitle, { minWordLength: 10 })}
          </h2>
          <div className="right-0 bottom-0 mb-6 flex md:absolute md:mb-0">
            <ButtonPrev ref={prevElRef} />
            <div className="ml-4">
              <ButtonNext ref={nextElRef} />
            </div>
          </div>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoHeight
          grabCursor
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          navigation={{
            prevEl,
            nextEl,
          }}
        >
          {content.itemRefs.map((ref, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={`relative  px-16 py-6 ${
                    content.itemBackgroundColor === "light"
                      ? "bg-white"
                      : "bg-primary-light"
                  }`}
                >
                  <img
                    width="33"
                    height="35"
                    src="/img/quote.png"
                    alt="Quote"
                    className="absolute top-4 left-4"
                  />
                  <div className="flex flex-col">
                    <div className="text-base leading-tight tracking-1">
                      {ref.itemText}
                    </div>
                    <span className="mt-4 text-2xl font-semibold">
                      {ref.itemAuthor}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default References;
