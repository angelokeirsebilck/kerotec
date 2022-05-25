import cmsClient from "../lib/cmsClient";
import { homeEntryQuery } from "../gql/home.gql";
import { mainNavQuery } from "../gql/global/nav.gql";
import { footerQuery } from "../gql/global/footer.gql";
import { servciesQuery } from "../gql/categories/services.gql";
import HomeBanner from "../components/home/HomeBanner";
import Layout from "../components/base/Layout";
import parseSEO from "../utils/parseSEO";
import Content from "../components/content/Content";
import { uspQuery } from "../gql/global/usp.gql";

export async function getStaticProps() {
  const params = {
    siteId: [2],
  };

  const content = await cmsClient.request(homeEntryQuery, params);
  const mainNav = await cmsClient.request(mainNavQuery, params);
  const footer = await cmsClient.request(footerQuery, params);
  const usp = await cmsClient.request(uspQuery, params);
  const services = await cmsClient.request(servciesQuery, params);

  // console.log(parseSEO(content.entry.seo));
  return {
    props: {
      mainNav,
      content,
      seo: parseSEO(content.entry.seo),
      usp,
      services,
      footer,
      slug: "home",
    },
  };
}

export default function Home({ mainNav, footer, content, usp, services }) {
  return (
    <Layout border={true} mainNav={mainNav} footer={footer}>
      <HomeBanner content={content.entry.fieldHomeBannerKerotec[0]} />
      <Content
        content={content.entry.fieldContentKerotec}
        usp={usp}
        services={services}
        lcp={false}
      />
    </Layout>
  );
}
