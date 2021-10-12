import Image from "next/image"
import profilePic from "../public/images/mountain.jpg";
import Link from "next/link"

const Profile = () => {
  const getAge = () => {
    const today = new Date();
    const birthDay = new Date('1998-03-05T00:01:00')
    return today.getFullYear() - birthDay.getFullYear()
  }
  return (
    <section className="mt-8">
      <Image src={profilePic} width={256} height={256} placeholder="blur" className="rounded-full"></Image>
      <div className="mt-8">
        <p className="font-semibold text-xl default-text">About me:</p>
        <hr className="w-2/3 my-1"/>
        <ul className="default-text list-disc list-inside">
          <li>{getAge()} years old</li>
          <li>studying informatikcs at <Link href="https://www.inf.uni-hamburg.de/en/studies/bachelor/inf.html"><a>UHH</a></Link></li>
          <li>React(Next.js), Python</li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
