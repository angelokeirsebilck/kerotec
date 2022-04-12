import cmsClient from "../lib/cmsClient";
import { mainNavQuery } from "../gql/global/nav.gql";
import { pagesQuery } from "../gql/pages/pages.gql";
import HomeBanner from "../components/home/HomeBanner";
import Layout from "../components/base/Layout";

export async function getStaticProps({ params }) {
  const queryParams = {
    siteId: [2],
  };

  const content = await cmsClient.request(pagesQuery, queryParams);
  const mainNav = await cmsClient.request(mainNavQuery, queryParams);

  return {
    props: {
      mainNav,
      content,
    },
  };
}

export async function getStaticPaths() {
  const queryParams = {
    siteId: [2],
  };

  const content = await cmsClient.request(pagesQuery, queryParams);

  const paths = content.entries.map((page) => {
    if (page.slug !== undefined) {
      return {
        params: {
          slug: page.slug,
        },
      };
    }
  });

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export default function DefaultPage({ mainNav, content }) {
  return <Layout mainNav={mainNav}></Layout>;
}
