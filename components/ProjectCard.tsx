import Link from "next/link";

const ProjectCard = () => {
  return (
    <div>
      <h1>ProjectCard</h1>
      <Link href="/todos">
        <a className="p-4">Check it out!</a>
      </Link>
    </div>
  );
};

export default ProjectCard;
