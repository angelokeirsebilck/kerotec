import cmsClient from "../lib/cmsClient";
import { homeEntryQuery } from "../gql/home.gql";
import { mainNavQuery } from "../gql/global/nav.gql";
import HomeBanner from "../components/home/HomeBanner";
import Layout from "../components/base/Layout";

export async function getStaticProps() {
  const params = {
    siteId: [2],
  };

  const content = await cmsClient.request(homeEntryQuery, params);
  const mainNav = await cmsClient.request(mainNavQuery, params);

  return {
    props: {
      mainNav,
      content,
    },
  };
}

export default function Home({
  mainNav,
  content: { entry: fieldHomeBannerKerotec },
}) {
  return (
    <Layout mainNav={mainNav}>
      <HomeBanner content={fieldHomeBannerKerotec} />
    </Layout>
  );
}
