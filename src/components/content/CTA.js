import React, { useRef, useEffect } from "react";
import Image from "next/image";

import ThemeButton from "../base/Button";
import Container from "../base/Container";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Cta = ({ content }) => {
  const ctaContent = content.itemCta[0].fieldKerotecCtaContent[0];

  const title = useRef(null);
  const titleContainer = useRef(null);

  useEffect(() => {
    gsap.from(title.current, {
      scrollTrigger: {
        trigger: titleContainer.current,
        start: "top 80%",
        // markers: true,
      },
      duration: 1.2,

      ease: "power4.out",
      yPercent: 100,
    });
    return () => {
      // Your cleanup code, including removeEventListeners
    };
  }, []);

  const spacing =
    content.itemBackgroundColor === "white" ? "section" : "section-bg";
  const textColor =
    content.itemBackgroundColor === "light" ? "text-white" : "text-body";
  const btnClass =
    content.itemBackgroundColor === "white" ? "btn-primary" : "btn-secondary";

  return (
    <div
      className={
        content.itemBackgroundColor === "light"
          ? "relative z-10 overflow-hidden bg-primary text-white"
          : "relative z-10 overflow-hidden bg-white"
      }
    >
      <div className="absolute top-0 left-0 z-20 h-full w-full opacity-20">
        {ctaContent.itemImage[0] && (
          <Image
            alt={ctaContent.itemImage[0].title}
            src={ctaContent.itemImage[0].url}
            layout="fill"
            objectFit="cover"
            sizes="100vw"
            placeholder="empty"
          />
        )}
      </div>

      <div className="relative z-30">
        <Container>
          <div className={`${spacing} grid gap-6 md:grid-cols-12 `}>
            <div className="overflow-hidden md:col-span-4" ref={titleContainer}>
              <h2
                ref={title}
                className={`heading1-clamp font-semibold tracking-3 ${textColor}`}
              >
                {ctaContent.itemTitle}
              </h2>
            </div>
            <div className="flex flex-col justify-between md:col-span-4 md:col-start-9 md:items-end">
              <div
                className={`heading3-clamp font-medium md:text-right ${textColor}`}
              >
                {ctaContent.itemText}
              </div>
              {ctaContent.itemLink.length > 0 && (
                <div className="mt-6">
                  <ThemeButton
                    className={btnClass}
                    type="next"
                    href={`/${ctaContent.itemLink[0].slug}`}
                    label={ctaContent.itemLinkLabel}
                    footer
                  />
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Cta;
