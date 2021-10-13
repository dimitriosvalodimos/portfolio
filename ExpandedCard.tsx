import { useCards } from "@utils/useProjectCards";
import { motion } from "framer-motion";
import Link from "next/link";

const ExpandedCard = ({ card }: { card: number }) => {
  const resetCard = useCards((state) => state.setCard);
  const cardDataAt = useCards((state) => state.cardData)[card];
  return (
    <motion.div
      onClick={() => resetCard(-1)}
      className="max-w-xs p-4 m-4 border border-gray-100 dark:border-gray-600 rounded-xl shadow-lg hover:scale-105 transition duration-200 cursor-pointer default-bg"
    >
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold default-text my-1">
          {cardDataAt.name}
        </h1>
        <h1 className="text-sm font-semibold text-gray-500 my-1">
          {cardDataAt.category}
        </h1>
      </div>
      <hr className="w-1/2 my-4" />
      <p>{cardDataAt.description}</p>
      <p>{cardDataAt.stack.join(", ")}</p>
      <Link href={cardDataAt.linkTo}>
        <a className="default-link">Check it out!</a>
      </Link>
    </motion.div>
  );
};

export default ExpandedCard;
