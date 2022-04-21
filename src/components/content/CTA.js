import React from "react";
import Image from "next/image";
import { hyphenateSync } from "hyphen/nl";
// Components
import ThemeButton from "../base/Button";
import Container from "../base/Container";

const Cta = ({ content }) => {
  const ctaContent = content.itemCta[0].fieldKerotecCtaContent[0];

  const spacing =
    content.itemBackgroundColor === "white" ? "section" : "section-bg";
  const textColor =
    content.itemBackgroundColor === "light" ? "text-white" : "text-body";
  const btnClass =
    content.itemBackgroundColor === "white" ? "btn-primary" : "btn-black";

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
            <div className="md:col-span-4">
              <h2
                className={`heading1-clamp font-semibold tracking-3 ${textColor}`}
              >
                {hyphenateSync(ctaContent.itemTitle, { minWordLength: 10 })}
              </h2>
            </div>
            <div className="flex flex-col justify-between md:col-span-4 md:col-start-9 md:items-end">
              <div
                className={`heading3-clamp font-medium md:text-right ${textColor}`}
              >
                {hyphenateSync(ctaContent.itemText, { minWordLength: 10 })}
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
