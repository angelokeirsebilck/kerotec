import cmsClient from "../lib/cmsClient";
import { homeEntryQuery } from "../gql/home.gql";
import { mainNavQuery } from "../gql/global/nav.gql";
import { footerQuery } from "../gql/global/footer.gql";
import HomeBanner from "../components/home/HomeBanner";
import Layout from "../components/base/Layout";
import parseSEO from "../utils/parseSEO";
import Content from "../components/content/Content";
import { uspQuery } from "../gql/global/usp.gql";
import { getCookieConsentValue } from "react-cookie-consent";

export async function getStaticProps() {
  const params = {
    siteId: [2],
  };

  const content = await cmsClient.request(homeEntryQuery, params);
  const mainNav = await cmsClient.request(mainNavQuery, params);
  const footer = await cmsClient.request(footerQuery, params);
  const usp = await cmsClient.request(uspQuery, params);

  // console.log(parseSEO(content.entry.seo));
  return {
    props: {
      mainNav,
      content,
      seo: parseSEO(content.entry.seo),
      usp,
      footer,
    },
  };
}

export default function Home({ mainNav, footer, content, usp }) {
  return (
    <Layout border={true} mainNav={mainNav} footer={footer}>
      <HomeBanner content={content.entry.fieldHomeBannerKerotec[0]} />
      <Content
        content={content.entry.fieldContentKerotec}
        usp={usp}
        lcp={false}
      />
    </Layout>
  );
}
