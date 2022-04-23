import * as React from "react";
import Head from "next/head";
import { getCookieConsentValue } from "react-cookie-consent";

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
      {process.env.NEXT_PUBLIC_IS_LIVE == 1 &&
        getCookieConsentValue() == "true" && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=G-WHSEVTMEV1`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-WHSEVTMEV1', {
                    page_path: window.location.pathname,
                    });
                `,
              }}
            />
          </>
        )}
    </Head>
  );
}

export default Seo;
