import cmsClient from "../lib/cmsClient";
import { homeEntryQuery } from "../gql/home.gql";
import { mainNavQuery } from "../gql/global/nav.gql";
import { footerQuery } from "../gql/global/footer.gql";
import HomeBanner from "../components/home/HomeBanner";
import Layout from "../components/base/Layout";
import parseSEO from "../utils/parseSEO";
import Form from "../components/base/Form";
import Content from "../components/content/Content";
import { uspQuery } from "../gql/global/usp.gql";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Layout border={true} mainNav={mainNav} footer={footer}>
      <HomeBanner content={content.entry.fieldHomeBannerKerotec[0]} />
      <div className="" ref={ref}>
        {inView && (
          <Content content={content.entry.fieldContentKerotec} usp={usp} />
        )}
      </div>
    </Layout>
  );
}
