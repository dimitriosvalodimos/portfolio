import { ProjectCardProps } from "@utils/commonProps";
import Link from "next/link";

const ProjectCard = ({
  name,
  description,
  linkTo,
  stack,
}: ProjectCardProps) => {
  return (
    <div className="p-4 border border-gray-100 rounded-xl shadow-lg mt-8">
      <h1 className="text-xl font-semibold default-text my-1">{name}</h1>
      <hr className="w-1/2" />
      <p>{description}</p>
      <p>{typeof stack === "string" ? stack : stack.join(", ")}</p>
      <Link href={linkTo}>
        <a className="default-link">Check it out!</a>
      </Link>
    </div>
  );
};

export default ProjectCard;
