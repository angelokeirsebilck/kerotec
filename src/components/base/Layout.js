import React from "react";
import Header from "./Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import useGlobalState from "../../hooks/useGlobalState";
import { useRouter } from "next/router";
import Footer from "./Footer";
import LandingAnimation from "./LandingAnimation";
const CookieConsent = dynamic(() => import("react-cookie-consent"));
import { getCookieConsentValue } from "react-cookie-consent";

const Layout = ({ seo, mainNav, footer, children, border }) => {
  const { showCookiePopup, changeShowCookiepopup } = useGlobalState();
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        {process.env.NEXT_PUBLIC_IS_LIVE == 1 &&
          getCookieConsentValue() == "true" && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-WHSEVTMEV1`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WHSEVTMEV1', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
              />
            </>
          )}
      </Head>

      <Header border={border} mainNav={mainNav} />
      <main>{children}</main>
      <LandingAnimation />
      <Footer footer={footer} />
      {showCookiePopup && (
        <CookieConsent
          visible={showCookiePopup}
          enableDeclineButton
          buttonText="Accepteer"
          declineButtonText="Weiger"
          style={{ background: "#000", fontSize: "16px" }}
          buttonStyle={{
            background: "#006134",
            fontSize: "16px",
            borderRadius: "6px",
            color: "white",
          }}
          declineButtonStyle={{
            background: "transparent",
            fontSize: "16px",
            borderWidth: "2px",
            borderStyle: "solid",
            borderColor: "#006134",
            borderRadius: "6px",
          }}
          onDecline={() => {
            changeShowCookiepopup("byCookieValue");
          }}
          onAccept={() => {
            changeShowCookiepopup("byCookieValue");
            router.push(router.asPath);
          }}
        >
          Deze website maakt gebruik van cookies. Meer informatie hierover vind
          je{" "}
          <Link href="/cookies">
            <a className="underline transition-colors hover:text-primary">
              hier
            </a>
          </Link>
          .
        </CookieConsent>
      )}
    </div>
  );
};

export default Layout;
