import * as React from "react";
import Head from "next/head";

function Seo({ title, meta, links, jsonLd, descr }) {
  return (
    <Head>
      <title>{title}</title>
      <meta content={descr} name="desciption" />
      {meta?.map((item) => (
        <meta key={item.content} {...item} />
      ))}

      {links?.map((item) => (
        <link key={item.href} {...item} />
      ))}
      {jsonLd?.map((item) => (
        <script key={item["@context"]} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Head>
  );
}

export default Seo;
