import "../styles/globals.css";
import "../styles/Layout.css";
import "../styles/font/icofont.min.css";
import "../styles/section/_global-style.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Head from "next/head";
import { Fragment, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  const title = Component.title || "NFT - Full Stack Web Development Services";
  const Layout = Component.layout || Fragment;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
