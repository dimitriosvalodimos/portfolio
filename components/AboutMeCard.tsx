import Link from 'next/link';

const AboutMeCard = () => {
  const getAge = () => {
    const today = new Date();
    const birthDay = new Date('1998-03-05T00:01:00');
    return today.getFullYear() - birthDay.getFullYear();
  };

  return (
    <div className="place-self-center">
      <p className="font-semibold text-xl default-text">Kurz zu mir:</p>
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
  );
};

export default AboutMeCard;
