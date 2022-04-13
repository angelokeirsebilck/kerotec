import { gql } from "graphql-request";
import { content } from "../global/content.gql";
import { seomatic } from "../global/seomatic.gql";

export const cookiesEntryQuery = gql`
  query cookiesEntryQuery($siteId: [QueryArgument]!) {
    entry(siteId: $siteId, slug: "cookies") {
      ... on legalKerotec_default_Entry {
        id
        ${seomatic}
        ${content}
    
      }
    }
  }
`;
