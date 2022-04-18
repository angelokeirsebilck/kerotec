import { gql } from "graphql-request";

export const footerQuery = gql`
  query homeEntryQuery($siteId: [QueryArgument]!) {
    link: globalSet(siteId: $siteId, handle: "globalKerotecFooter") {
      ... on globalKerotecFooter_GlobalSet {
        fieldKerotecFooterLink {
          slug
        }
      }
    }
    nav: globalSet(siteId: $siteId, handle: "globalNavigation") {
      ... on globalNavigation_GlobalSet {
        fieldFooterNav {
          ... on fieldFooterNav_BlockType {
            itemLink {
              slug
              title
            }
          }
        }
      }
    }
    socials: globalSet(siteId: $siteId, handle: "globalKerotecCompanyInfo") {
      ... on globalKerotecCompanyInfo_GlobalSet {
        fieldFacebook
      }
    }
    info: globalSet(siteId: $siteId, handle: "globalKerotecCompanyInfo") {
      ... on globalKerotecCompanyInfo_GlobalSet {
        fieldTel1
        fieldTel2
        fieldEmail
      }
    }
  }
`;
