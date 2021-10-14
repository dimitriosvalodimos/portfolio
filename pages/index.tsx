import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Layout from "@components/Layout";

const Home: NextPage = () => {
  const Profile = dynamic(() => import("@components/Profile"), { ssr: false });
  return (
    <Layout currentPage="Home">
      <Profile />
    </Layout>
  );
};

export default Home;
