import { gql } from "graphql-request";

export const homeEntryQuery = gql`
  query homeEntryQuery($siteId: [QueryArgument]!) {
    entry(siteId: $siteId) {
      ... on homeKerotec_homeKerotec_Entry {
        id
        fieldHomeBannerKerotec {
          ... on fieldHomeBannerKerotec_BlockType {
            id
            itemImage {
              url
            }
            itemIntro
            itemTitle
          }
        }
      }
    }
  }
`;
