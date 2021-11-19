import React from "react";
import Head from "next/head";

export const Meta = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
);
