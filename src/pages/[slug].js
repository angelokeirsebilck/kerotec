import dynamic from "next/dynamic";
import cmsClient from "../lib/cmsClient";
import { mainNavQuery } from "../gql/global/nav.gql";
import { pagesQuery } from "../gql/pages/pages.gql";
import { servciesQuery } from "../gql/categories/services.gql";
import { pagesListQuery } from "../gql/pages/pagesList.gql";
import { footerQuery } from "../gql/global/footer.gql";
import { uspQuery } from "../gql/global/usp.gql";
import Content from "../components/content/Content";
import Layout from "../components/base/Layout";
import parseSEO from "../utils/parseSEO";
import Title from "../components/base/Title";

const ChangeCookies = dynamic(() =>
  import("../components/cookies/ChangeCookies")
);

export async function getStaticProps({ params }) {
  const queryParams = {
    siteId: [2],
    slug: params.slug,
  };

  const content = await cmsClient.request(pagesQuery, queryParams);
  const mainNav = await cmsClient.request(mainNavQuery, queryParams);
  const footer = await cmsClient.request(footerQuery, queryParams);
  const usp = await cmsClient.request(uspQuery, queryParams);
  const services = await cmsClient.request(servciesQuery, queryParams);

  return {
    props: {
      mainNav,
      content,
      seo: parseSEO(content.entry.seo),
      usp,
      services,
      footer,
      slug: params.slug,
    },
  };
}

export async function getStaticPaths() {
  const queryParams = {
    siteId: [2],
  };

  const content = await cmsClient.request(pagesListQuery, queryParams);

  const paths = content.entries.map((page) => {
    if (page.slug !== undefined) {
      return {
        params: {
          slug: page.slug,
          type: page.__typename,
        },
      };
    }
  });

  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export default function DefaultPage({
  mainNav,
  footer,
  usp,
  content,
  services,
}) {
  let contentMatrix = content.entry.fieldContentKerotec;

  if (content.entry.__typename == "kerotecSeoPages_default_Entry") {
    contentMatrix = content.entry.fieldKerotecSEOContent[0].fieldContentKerotec;
  }

  return (
    <Layout border={false} mainNav={mainNav} footer={footer}>
      <Title title={content.entry.title} />
      <Content
        content={contentMatrix}
        usp={usp}
        services={services}
        info={footer.info}
        lcp={true}
      />
      {content.entry?.slug == "cookies" && <ChangeCookies />}
    </Layout>
  );
}
