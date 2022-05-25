import { gql } from "graphql-request";

export const uspQuery = gql`
  query homeEntryQuery($siteId: [QueryArgument]!) {
    globalSet(siteId: $siteId, handle: "globalUspKerotec") {
      ... on globalUspKerotec_GlobalSet {
        fieldKerotecUsp {
          ... on fieldKerotecUsp_BlockType {
            itemIcon {
              id
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
