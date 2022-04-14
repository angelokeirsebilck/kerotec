export const content = `
fieldContentKerotec {
    ... on fieldContentKerotec_typeText_BlockType {
      __typename
      id
      itemText
      itemTitle
    }
    ... on fieldContentKerotec_typeUsp_BlockType {
      __typename
      itemBackgroundColor
    }
    ... on fieldContentKerotec_typeTextMedia_BlockType {
      __typename
      id
      itemBackgroundColor
      itemLink {
        ... on itemLink_BlockType {
          id
          itemLabel
          itemLink {
            slug
          }
        }
      }
      itemText
      itemTitle
      itemMediaPosition
      itemTextAlignment
      itemImage {
        url
        title
      }
    }
  }
`;
