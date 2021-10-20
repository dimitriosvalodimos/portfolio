import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Layout from '@components/Layout';
// import AboutMeCard from '@components/AboutMeCard';
// import Greetings from '@components/Greetings';

const Home: NextPage = () => {
  const Profile = dynamic(() => import('@components/Profile'));
  const Greetings = dynamic(() => import('@components/Greetings'));
  const AboutMeCard = dynamic(() => import('@components/AboutMeCard'));
  const ContactCard = dynamic(() => import('@components/ContactCard'));
  return (
    <Layout currentPage="Home">
      <div className="sm:w-2/3 lg:w-1/2 mx-auto grid xs:grid-flow-row sm:grid-cols-2 justify-center xs:gap-y-8 sm:gap-y-8 mt-16">
        <Profile />
        <Greetings />
        <AboutMeCard />
        <ContactCard />
      </div>
    </Layout>
  );
};

export default Home;
