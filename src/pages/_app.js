import "../../styles/globals.css";
import Seo from "../components/base/SEO";
import { GlobalStateProvider } from "../hooks/useGlobalState";

function MyApp({ Component, pageProps }) {
  const { seo, ...props } = pageProps;

  // console.log(isTransitioning);
  return (
    <GlobalStateProvider>
      <Seo {...seo} />
      <Component {...props} key={pageProps.slug} />
    </GlobalStateProvider>
  );
}

export default MyApp;
