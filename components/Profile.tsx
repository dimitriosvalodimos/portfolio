import Image from 'next/image';
import profilePic from '../public/images/mountain.jpg';
import Link from 'next/link';

const Profile = () => {
  const getAge = () => {
    const today = new Date();
    const birthDay = new Date('1998-03-05T00:01:00');
    return today.getFullYear() - birthDay.getFullYear();
  };
  return (
    <section className="mt-12 sm:mt-20 mx-8 sm:mx-16 flex flex-col sm:flex-row sm:justify-center sm:items-center text-center">
      <div className="mb-8 sm:mb-0 sm:mr-4 md:mr-16">
        <h1 className="text-4xl font-semibold">Moin 👋!</h1>
        <h1 className="text-4xl font-semibold">Ich bin Dimitrios</h1>
      </div>
      <div>
        <Image
          src={profilePic}
          width={256}
          height={256}
          placeholder="blur"
          className="rounded-full"
        ></Image>
      </div>
      <div className="text-left sm:ml-4 md:ml-16">
        <p className="font-semibold text-xl default-text mt-8 mb-2 sm:mt-0">
          Kurz zu mir:
        </p>
        <ul className="text-left leading-relaxed md:w-full mx-auto">
          <li>{getAge()} Jahre alt</li>
          <li>
            B.Sc Informatik an der{' '}
            <Link
              href="https://www.inf.uni-hamburg.de/en/studies/bachelor/inf.html"
              prefetch={false}
            >
              <a
                className="default-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                UHH
              </a>
            </Link>
          </li>
          <li>Next.js, Python, Java</li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;
