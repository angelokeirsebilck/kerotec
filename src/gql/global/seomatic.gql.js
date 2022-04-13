export const seomatic = `
seo: seomatic(asArray: true, environment: live) {
    ... on SeomaticType {
      metaTitleContainer
      metaTagContainer
      metaSiteVarsContainer
      metaLinkContainer
      metaJsonLdContainer
    }
  }
`;
