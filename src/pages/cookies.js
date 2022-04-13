import cmsClient from "../lib/cmsClient";
import { cookiesEntryQuery } from "../gql/legal/cookies.gql";
import { mainNavQuery } from "../gql/global/nav.gql";
import Layout from "../components/base/Layout";
import Content from "../components/content/Content";
import parseSEO from "../utils/parseSEO";
import Container from "../components/base/Container";
import useGlobalState from "../utils/useGlobalState";
import { resetCookieConsentValue } from "react-cookie-consent";
import { deleteAllCookies } from "../utils/deleteAllCookies";

export async function getStaticProps() {
  const params = {
    siteId: [2],
  };
  const content = await cmsClient.request(cookiesEntryQuery, params);
  const mainNav = await cmsClient.request(mainNavQuery, params);

  return {
    props: {
      mainNav,
      content,
      seo: parseSEO(content.entry.seo),
    },
  };
}

export default function Home({
  mainNav,
  content: { entry: fieldContentKerotec },
}) {
  const { changeShowCookiepopup } = useGlobalState();

  return (
    <Layout mainNav={mainNav}>
      <Content content={fieldContentKerotec.fieldContentKerotec} />
      <Container>
        <button
          className="btn btn-sm btn-primary mb-12 md:mb-28"
          onClick={() => {
            resetCookieConsentValue();
            changeShowCookiepopup("show");
            deleteAllCookies();
          }}
        >
          Wijzig cookie voorkeur
        </button>
      </Container>
    </Layout>
  );
}
