import { ProjectCardProps } from "@utils/commonProps";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCards } from "@utils/useProjectCards";

const ProjectCard = ({
  cardNumber,
  name,
  category,
  description,
  linkTo,
  stack,
}: ProjectCardProps) => {
  const setCard = useCards((state) => state.setCard);
  return (
    <motion.div
      onClick={() => setCard(cardNumber)}
      className="max-w-xs p-4 m-4 border border-gray-100 dark:border-gray-600 rounded-xl shadow-lg hover:scale-105 transition duration-200 cursor-pointer default-bg"
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold default-text my-1">{name}</h1>
        <h1 className="text-sm font-semibold text-gray-500 my-1">{category}</h1>
      </div>
      <hr className="w-1/2 my-4" />
      <p>{description}</p>
      <p>{typeof stack === "string" ? stack : stack.join(", ")}</p>
      <Link href={linkTo}>
        <a className="default-link">Check it out!</a>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
