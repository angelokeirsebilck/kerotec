import React from "react";
import Header from "./Header";
// import CookieConsent from "react-cookie-consent";
import dynamic from "next/dynamic";
import Link from "next/link";
import useGlobalState from "../../hooks/useGlobalState";
import { useRouter } from "next/router";
import Footer from "./Footer";
import LandingAnimation from "./LandingAnimation";
const CookieConsent = dynamic(() => import("react-cookie-consent"));

const Layout = ({ seo, mainNav, footer, children, border }) => {
  const { showCookiePopup, changeShowCookiepopup } = useGlobalState();
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Head>
        <title>KEROTEC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

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
            router.reload();
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
