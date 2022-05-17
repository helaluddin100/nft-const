import "../styles/globals.css";
import "../styles/Layout.css";
import "../styles/font/icofont.min.css";
import "../styles/section/_global-style.scss";
import Aos from "aos";
import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Head from "next/head";
import { Fragment, useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const title = Component.title || "NFT - Full Stack Web Development Services";
  const description =
    Component.description ||
    "NFT - Full Stack Web Development Services by NFT Constractor";
  const Layout = Component.layout || Fragment;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
