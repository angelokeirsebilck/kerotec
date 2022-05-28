import React, { useRef, useEffect } from "react";
import Container from "../base/Container";
import LinesDownRight from "../../../public/img/svg/lines-down-right.svg";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Services = ({ content, services }) => {
  const spacing =
    content.itemBackgroundColor === "white" ? "section" : "section-bg";
  const fadeInElements = useRef([]);
  const title = useRef(null);
  const titleContainer = useRef(null);
  useEffect(() => {
    gsap.from(fadeInElements.current, {
      scrollTrigger: {
        trigger: fadeInElements.current,
        start: "top 80%",
        // markers: true,
      },
      opacity: 0,
      y: 20,
      stagger: 0.2,
    });
    return () => {
      // Your cleanup code, including removeEventListeners
    };
  }, []);

  useEffect(() => {
    gsap.from(title.current, {
      scrollTrigger: {
        trigger: titleContainer.current,
        start: "top 80%",
      },
      duration: 1.2,
      ease: "power4.out",
      yPercent: 100,
    });
    return () => {
      // Your cleanup code, including removeEventListeners
    };
  }, []);

  return (
    <Element
      name="services"
      className={
        content.itemBackgroundColor === "light"
          ? "relative overflow-hidden bg-primary-bg"
          : "relative overflow-hidden bg-white"
      }
    >
      <Container>
        <div className={spacing}>
          <h2
            ref={titleContainer}
            className="font-sans heading1-clamp mb-6 overflow-hidden font-semibold tracking-3 md:mb-12"
          >
            <span ref={title} className="inline-block">
              {content.itemTitle}
            </span>
          </h2>
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
            <LinesDownRight className="absolute -bottom-40 right-1/3 hidden md:block xl:-right-[10%]" />
            {services.categories.map((service, index) => {
              return (
                <div
                  key={service.id}
                  ref={(e) => (fadeInElements.current[index] = e)}
                  className={`relative p-6 ${
                    content.itemBackgroundColor === "light"
                      ? "bg-white"
                      : "bg-primary-bg"
                  }`}
                >
                  <div className="flex flex-col">
                    <h3 className="mb-6 text-3xl font-medium md:text-4xl">
                      {service.title}
                    </h3>
                    <div
                      className="prose-style"
                      dangerouslySetInnerHTML={{
                        __html: service.fieldSimpleText,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default Services;
