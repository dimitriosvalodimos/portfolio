import Image from 'next/image';
import profilePic from '../public/images/mountain.jpg';

const Profile = () => {
  return (
    <section className="place-self-center">
      <Image
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
