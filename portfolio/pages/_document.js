import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="author" content="KhuongCorp" />
        <meta name="description" content="Building Our Life" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main />
      <NextScript />
    </Html>
  );
}
