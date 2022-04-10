import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="nl">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100&family=Montserrat:ital,wght@0,300;0,500;0,600;0,700;1,400&family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@100&family=Roboto:ital,wght@0,100;1,100;1,300&display=swap"
        rel="stylesheet"
      ></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
