import "../../styles/globals.css";
import Seo from "../components/base/SEO";
import { GlobalStateProvider } from "../hooks/useGlobalState";

function MyApp({ Component, pageProps }) {
  const { seo, ...props } = pageProps;
  return (
    <GlobalStateProvider>
      <Seo {...seo} />
      <Component {...props} />
    </GlobalStateProvider>
  );
}

export default MyApp;
