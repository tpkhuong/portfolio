import React from "react";
import Head from "next/head";
import Test from "../Components/Test/index";

export default function Home({ children, ...props }) {
  return (
    <React.Fragment>
      <Head>
        <title>Toan Khuong</title>
        <link
          rel="shortcut icon"
          href="/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>
      <header>
        <Test>Hello Next!!</Test>
      </header>
    </React.Fragment>
  );
}
