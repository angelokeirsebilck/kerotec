import { gql } from "graphql-request";
import { content } from "../global/content.gql";
import { seomatic } from "../global/seomatic.gql";

export const pagesQuery = gql`
  query pagesQuery($siteId: [QueryArgument]!, $slug: [String]!) {
    entry(siteId: $siteId, section: ["pagesKerotec", "legalKerotec"], slug: $slug) {
      ... on pagesKerotec_default_Entry {
        __typename
        slug
        title
        fieldContentKerotec {
          ... on fieldContentKerotec_typeTextMedia_BlockType {
            __typename
            itemImage {
              url
            }
            itemText
            itemTitle
          }
        }
        ${seomatic}
        ${content}
      }
      ... on legalKerotec_default_Entry {
        __typename
        slug
        title
        fieldContentKerotec {
          ... on fieldContentKerotec_typeTextMedia_BlockType {
            __typename
            itemImage {
              url
            }
            itemText
            itemTitle
          }
        }
        ${seomatic}
        ${content}
      }
    }
  }
`;
