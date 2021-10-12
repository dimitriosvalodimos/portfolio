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
    <section className="mt-8 flex flex-col sm:flex-row sm:justify-center sm:items-center text-center">
      <div>
        <Image src={profilePic} width={256} height={256} placeholder="blur" className="rounded-full"></Image>
      </div>
      <div className="sm:ml-8 md:ml-32">
        <p className="font-semibold text-xl default-text mt-8 sm:mt-0">About me:</p>
        <hr className="my-4 w-3/4 mx-auto"/>
        <ul className="text-left leading-relaxed w-3/4 md:w-full mx-auto">
          <li>{getAge()} years old</li>
          <li>B.Sc Informatics at <Link href="https://www.inf.uni-hamburg.de/en/studies/bachelor/inf.html"><a className="text-blue-500 underline dark:text-yellow-400" target="_blank" rel="noopener noreferrer">UHH</a></Link></li>
          <li>Next.js, Python, Java</li>
        </ul>
      </div>
    </section>
  )
}

export default Profile
