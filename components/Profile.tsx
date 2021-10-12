import Image from "next/image"
import profilePic from "../public/images/mountain.jpg";

const Profile = () => {
  const getAge = () => {
    const today = new Date();
    const birthDay = new Date('1998-03-05T00:01:00')
    return today.getFullYear() - birthDay.getFullYear()
  }
  return (
    <section className="mt-8">
      <Image src={profilePic} layout="responsive" className="rounded-full"></Image>
      <div className="mt-8">
        <p className="font-semibold text-xl default-text">About me:</p>
        <hr />
        <ul className="default-text">
          <li>{getAge()} years old</li>
          <li>studying computer science at UHH</li>
          <li>frequently use React(Next.js), Python</li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
