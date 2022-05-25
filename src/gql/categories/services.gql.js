import { gql } from "graphql-request";

export const servciesQuery = gql`
  query servicesQuery($siteId: [QueryArgument]!) {
    categories(siteId: $siteId, group: "kerotecServicesCategory") {
      ... on kerotecServicesCategory_Category {
        id
        title
        fieldSimpleText
      }
    }
  }
`;
