import Image from "next/image"
import profilePic from "../public/images/mountain.jpg";
import Link from "next/link"

const Profile = () => {
  const getAge = () => {
    const today = new Date();
    const birthDay = new Date('1998-03-05T00:01:00')
    return today.getFullYear() - birthDay.getFullYear()
  }
  // <div className="mt-8 sm:mt-0 sm:ml-4">
  return (
    <section className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:items-center text-center">
      <div>
        <Image src={profilePic} width={256} height={256} placeholder="blur" className="rounded-full"></Image>
      </div>
      <div className="sm:ml-8">
        <p className="font-semibold text-xl default-text mt-8 sm:mt-0">About me:</p>
        <hr className="my-4"/>
        <ul className="text-left list-disc list-inside">
          <li>{getAge()} years old</li>
          <li>B.Sc Informatics at <Link href="https://www.inf.uni-hamburg.de/en/studies/bachelor/inf.html"><a>UHH</a></Link></li>
          <li>Next.js, Python, Java</li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
