import * as React from "react";
import Head from "next/head";
// import Script from "next/script";

function Seo({ title, meta, links, jsonLd }) {
  return (
    <Head>
      <title>{title}</title>

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
      {/* {process.env.NODE_ENV == "production" && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-WHSEVTMEV1"
            strategy="afterInteractive"
          />
          <Script
            strategy="afterInteractive"
            id="gtag"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || []; function gtag()
              {dataLayer.push(arguments)}
              gtag('js', new Date()); gtag('config', 'G-WHSEVTMEV1');
            `,
            }}
          />
        </>
      )} */}
    </Head>
  );
}

export default Seo;
