import Layout from '@components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import image404 from '../public/images/Caution_Tape-big.png';

const FourOhFour = () => {
  return (
    <Layout currentPage="404">
      <div className="text-center my-16 md:flex justify-center items-center">
        <div className="w-full p-8 md:w-1/2">
          <Image
            src={image404}
            placeholder="blur"
            layout="intrinsic"
            alt="2 Warndreiecke als Fehlerindikator"
          ></Image>
        </div>
        <div className="w-full p-8 md:w-1/2">
          <h1 className="font-semibold text-2xl">404 - Page not Found</h1>
          <Link href="/" prefetch={false}>
            <a className="default-link block">Hier geht&apos;s zurück!</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FourOhFour;
