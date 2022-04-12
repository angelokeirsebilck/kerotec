import { gql } from "graphql-request";

export const mainNavQuery = gql`
  query MyQuery($siteId: [QueryArgument]!) {
    globalSet(siteId: $siteId) {
      ... on globalNavigation_GlobalSet {
        fieldMainNav {
          ... on fieldMainNav_BlockType {
            itemLink {
              slug
              sectionHandle
              typeHandle
            }
          }
        }
      }
    }
  }
`;
