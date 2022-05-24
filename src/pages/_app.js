import "../../styles/globals.css";
import TransitionLayout from "../components/base/Transition";
import Seo from "../components/base/SEO";
import useGlobalState, { GlobalStateProvider } from "../hooks/useGlobalState";

function MyApp({ Component, pageProps }) {
  const { seo, ...props } = pageProps;

  // console.log(isTransitioning);
  return (
    <GlobalStateProvider>
      {/* <PageTransition /> */}
      <Seo {...seo} />
      <TransitionLayout>
        <Component {...props} key={pageProps.slug} />
      </TransitionLayout>
    </GlobalStateProvider>
  );
}

export default MyApp;
