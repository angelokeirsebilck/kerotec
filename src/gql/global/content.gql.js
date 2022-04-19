export const content = `
fieldContentKerotec {
    ... on fieldContentKerotec_typeText_BlockType {
      __typename
      id
      itemText
      itemTitle
    }
    ... on fieldContentKerotec_typeForm_BlockType {
      __typename
      id
      itemIntro
    }
    ... on fieldContentKerotec_typeUsp_BlockType {
      id
      __typename
      itemBackgroundColor
    }
    ... on fieldContentKerotec_typeCta_BlockType {
      __typename
      id
      itemBackgroundColor
      itemCta {
        ... on kerotecCta_default_Entry {
          id
          fieldKerotecCtaContent {
            ... on fieldKerotecCtaContent_BlockType {
              id
              itemLink {
                slug
              }
              itemLinkLabel
              itemText
              itemTitle
              itemImage{
                url
              }
            }
          }
        }
      }
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
