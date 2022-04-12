import { gql } from "graphql-request";

export const pagesQuery = gql`
  query pagesQuery($siteId: [QueryArgument]!) {
    entries(siteId: $siteId, section: "pagesKerotec") {
      ... on pagesKerotec_default_Entry {
        __typename
        slug
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
      }
    }
  }
`;
