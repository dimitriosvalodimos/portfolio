import { LayoutProps } from "@utils/commonProps";
import { motion } from "framer-motion";
// import dynamic from "next/dynamic"
import Navbar from "@components/Navbar";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ currentPage, children }: LayoutProps) => {
  // const Navbar = dynamic(() => import('@components/Navbar'), {ssr:false})
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear" }}
    >
      <Head>
        <title>{currentPage} - Dimitrios Valodimos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </motion.main>
  );
};

export default Layout;
