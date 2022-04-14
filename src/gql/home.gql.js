import { gql } from "graphql-request";
import { content } from "./global/content.gql";
import { seomatic } from "./global/seomatic.gql";

export const homeEntryQuery = gql`
  query homeEntryQuery($siteId: [QueryArgument]!) {
    entry(siteId: $siteId, section: "homeKerotec") {
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
        ${seomatic}
        ${content}
      }
    }
  }
`;
