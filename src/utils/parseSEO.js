import * as R from "ramda";

const filterEmptyValues = (item) => item?.length !== 0;

const flattenValues = R.pipe(R.values, R.filter(filterEmptyValues), R.flatten);

export default function parseSEO(seo) {
  const parsed = R.toPairs(seo).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: JSON.parse(value) }),
    {}
  );

  const {
    metaTitleContainer,
    metaTagContainer,
    metaLinkContainer,
    metaJsonLdContainer,
  } = parsed;

  const meta = flattenValues(metaTagContainer);
  const links = flattenValues(metaLinkContainer);
  const jsonLd = flattenValues(metaJsonLdContainer);

  return {
    title: metaTitleContainer.title.title,
    meta,
    links,
    jsonLd,
  };
}
