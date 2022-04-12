import "../../styles/globals.css";
import { GlobalStateProvider } from "../utils/useGlobalState";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp;
