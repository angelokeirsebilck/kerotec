import { gql } from "graphql-request";

export const pagesListQuery = gql`
  query pagesQuery($siteId: [QueryArgument]!) {
    entries(siteId: $siteId, section: ["pagesKerotec", "legalKerotec"]) {
      ... on pagesKerotec_default_Entry {
        slug
      }
      ... on pagesKerotec_thanks_Entry {
        slug
      }
      ... on legalKerotec_default_Entry {
        slug
      }
    }
  }
`;
