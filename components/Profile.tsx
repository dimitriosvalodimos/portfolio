import Image from 'next/image';
import profilePic from '../public/images/vorne_schmal_square.jpg';

const Profile = () => {
  return (
    <section className="place-self-center">
      <Image
        alt="Ein Bild von mir. Braune kurze Haare, grau-blaue Augen, kaukasich."
        src={profilePic}
        width={256}
        height={256}
        placeholder="blur"
        className="rounded-full"
      ></Image>
    </section>
  );
};

export default Profile;
