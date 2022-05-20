import { gql } from "graphql-request";
import { content } from "../global/content.gql";
import { seomatic } from "../global/seomatic.gql";

export const pagesQuery = gql`
  query pagesQuery($siteId: [QueryArgument]!, $slug: [String]!) {
    entry(siteId: $siteId, section: ["pagesKerotec", "legalKerotec","kerotecSeoPages"], slug: $slug) {
      ... on pagesKerotec_default_Entry {
        __typename
        slug
        title
        ${seomatic}
        ${content}
      }
      ... on pagesKerotec_thanks_Entry {
        __typename
        slug
        title
        ${seomatic}
        ${content}
      }
      ... on legalKerotec_default_Entry {
        __typename
        slug
        title
        ${seomatic}
        ${content}
      }
      ... on kerotecSeoPages_default_Entry {
        slug
        title
        __typename
        fieldKerotecSeoPlace
        fieldKerotecSeoTitle
        ${seomatic}
        fieldKerotecSEOContent {
          ... on kerotecSeoPagesContent_default_Entry {
            id
            ${content}
          }
        }
      }
    }
  }
`;
