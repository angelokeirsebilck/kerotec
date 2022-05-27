import { useState, useEffect } from "react";
import "../../styles/globals.css";
import Seo from "../components/base/SEO";
import { GlobalStateProvider } from "../hooks/useGlobalState";

function MyApp({ Component, pageProps }) {
  const { seo, ...props } = pageProps;
  // const [showChild, setShowChild] = useState(false);
  // useEffect(() => {
  //   setShowChild(true);
  // }, []);

  // if (!showChild) {
  //   return null;
  // }
  // if (typeof window === "undefined") {
  //   return <></>;
  // } else {
  //   return (
  //     <GlobalStateProvider>
  //       <Seo {...seo} />
  //       <Component {...props} key={pageProps.slug} />
  //     </GlobalStateProvider>
  //   );
  // }
  return (
    <GlobalStateProvider>
      <Seo {...seo} />
      <Component {...props} key={pageProps.slug} />
    </GlobalStateProvider>
  );
}

export default MyApp;
