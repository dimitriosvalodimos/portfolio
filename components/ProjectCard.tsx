import { ProjectCardProps } from "@utils/commonProps";
import Link from "next/link";

const ProjectCard = ({
  name,
  description,
  linkTo,
  stack,
}: ProjectCardProps) => {
  return (
    <div className="p-2 rounded-xl shadow-lg mt-8">
      <h1 className="text-xl font-semibold default-text">{name}</h1>
      <p>{description}</p>
      {typeof stack === "string" ? stack : stack.join(", ")}
      <Link href={linkTo}>
        <a className="p-4 default-link">Check it out!</a>
      </Link>
    </div>
  );
};

export default ProjectCard;
