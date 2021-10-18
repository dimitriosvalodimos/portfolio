import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Layout from '@components/Layout';
import { HiMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { ImXing } from 'react-icons/im';
import Link from 'next/link';

const Home: NextPage = () => {
  const Profile = dynamic(() => import('@components/Profile'), { ssr: false });
  return (
    <Layout currentPage="Home">
      <Profile />
      <div className="sm:grid sm:justify-center mt-8 pl-8 text-left mb-8">
        <p className="font-semibold text-xl">Contact Me:</p>
        <ul>
          <li className="flex justify-left items-center">
            <HiMail />
            <span
              className="ml-1 default-link"
              onClick={(e) =>
                window.open('mailto:dimitriosvalodimos@gmail.com')
              }
            >
              dimitriosvalodimos@gmail.com
            </span>
          </li>
          <li className="flex justify-left items-center">
            <BsLinkedin />
            <Link href="https://www.linkedin.com/in/dimitrios-valodimos-5567431bb/">
              <a
                className="ml-1 default-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </Link>
          </li>
          <li className="flex justify-left items-center">
            <ImXing />
            <Link href="https://www.xing.com/profile/Dimitrios_Valodimos3/cv">
              <a className="ml-1 default-link" rel="noopener noreferrer">
                XING Profile
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
