import { gql } from "graphql-request";

export const pagesListQuery = gql`
  query pagesQuery($siteId: [QueryArgument]!) {
    entries(
      siteId: $siteId
      section: ["pagesKerotec", "legalKerotec", "kerotecSeoPages"]
    ) {
      ... on pagesKerotec_default_Entry {
        slug
        __typename
      }
      ... on pagesKerotec_thanks_Entry {
        slug
        __typename
      }
      ... on legalKerotec_default_Entry {
        slug
        __typename
      }
      ... on kerotecSeoPages_default_Entry {
        slug
        __typename
      }
    }
  }
`;
