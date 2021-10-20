import { BsLinkedin } from 'react-icons/bs';
import { ImXing, ImGithub } from 'react-icons/im';
import Link from 'next/link';

const ContactCard = () => {
  return (
    <div className="place-self-center xs:mb-8 leading-loose">
      <p className="font-semibold text-xl">Wo man mich findet:</p>
      <ul>
        <li className="flex justify-left items-center">
          <ImGithub className="text-2xl" />
          <Link href="https://github.com/dimitriosvalodimos">
            <a
              className="ml-1 xs:p-3 default-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              dimitriosvalodimos
            </a>
          </Link>
        </li>
        <li className="flex justify-left items-center">
          <BsLinkedin className="text-2xl" />
          <Link href="https://www.linkedin.com/in/dimitrios-valodimos-5567431bb/">
            <a
              className="ml-1 xs:p-3 default-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Link>
        </li>
        <li className="flex justify-left items-center">
          <ImXing className="text-2xl" />
          <Link href="https://www.xing.com/profile/Dimitrios_Valodimos3/cv">
            <a className="ml-1 xs:p-3 default-link" rel="noopener noreferrer">
              XING
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactCard;
