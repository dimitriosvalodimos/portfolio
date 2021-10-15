import { ProjectCardProps } from "@utils/commonProps";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCards } from "@utils/useProjectCards";
import { BsArrowRightShort } from "react-icons/bs";

const ProjectCard = ({ cardNumber }: ProjectCardProps) => {
  const { name, category, description, linkTo, stack } = useCards((state) =>
    state.getCardAt(cardNumber)
  );
  return (
    <motion.div className="max-w-xs p-4 m-4 border default-border rounded-xl shadow-lg hover:scale-105 default-transition default-bg">
      <h1 className="text-sm font-semibold text-gray-500 mb-2">{category}</h1>
      <h1 className="text-xl font-semibold default-text mb-4">{name}</h1>
      <p>{description}</p>
      <p className="my-4 text-right text-gray-400">{stack.join(", ")}</p>
      <span className="flex justify-center">
        <Link href={linkTo} prefetch={false}>
          <a className="default-link">Try it out!</a>
        </Link>
        <BsArrowRightShort className="ml-1 text-2xl default-link" />
      </span>
    </motion.div>
  );
};

export default ProjectCard;
