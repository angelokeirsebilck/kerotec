import "../../styles/globals.css";
import PageTransition from "../components/base/PageTransition";
import Seo from "../components/base/SEO";
import useGlobalState, { GlobalStateProvider } from "../hooks/useGlobalState";

function MyApp({ Component, pageProps }) {
  const { seo, ...props } = pageProps;
  const { isTransitioning } = useGlobalState();
  return (
    <GlobalStateProvider>
      <PageTransition />
      <Seo {...seo} />
      {!isTransitioning && <Component {...props} />}
    </GlobalStateProvider>
  );
}

export default MyApp;
