import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
