import { gql } from "graphql-request";

export const homeEntryQuery = gql`
  query homeEntryQuery($siteId: [QueryArgument]!) {
    entry(siteId: $siteId, section: "homeKerotec") {
      ... on homeKerotec_homeKerotec_Entry {
        id
        seo: seomatic(environment: live, asArray: true) {
          ... on SeomaticType {
            metaTitleContainer
            metaTagContainer
            metaSiteVarsContainer
            metaLinkContainer
            metaJsonLdContainer
          }
        }
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
