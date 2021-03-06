export const content = `
fieldContentKerotec {
    ... on fieldContentKerotec_typeText_BlockType {
      __typename
      id
      itemText
      itemTitle
      itemLink {
        ... on itemLink_BlockType {
          id
          itemLabel
          itemLink {
            slug
          }
        }
      }
    }
    ... on fieldContentKerotec_typeReferences_BlockType {
      __typename
      id
      itemTitle
      itemBackgroundColor
      itemRefs {
        ... on itemRefs_BlockType {
          itemAuthor
          itemText
        }
      }
    }
    ... on fieldContentKerotec_typeForm_BlockType {
      __typename
      id
      itemIntro
      itemThanksPage {
        slug
      }
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
        height
        width
      }
    }
    ... on fieldContentKerotec_typeServices_BlockType {
      __typename
      id
      itemTitle
      itemBackgroundColor
    }
  }
`;
