import Layout from "@components/Layout";
import ProjectCard from "@components/ProjectCard";
import Overlay from "@components/Overlay";
import ExpandedCard from "@components/ExpandedCard";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useCards } from "@utils/useProjectCards";

const Projects = () => {
  const activeCard = useCards((state) => state.currentCard);
  const setCard = useCards((state) => state.setCard);
  const cardData = useCards((state) => state.cardData);
  return (
    <Layout currentPage="Projects">
      <h1 className="default-text font-semibold text-2xl text-center mt-12">
        My Projects
      </h1>
      <AnimateSharedLayout type="crossfade">
        <div className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-2">
          {cardData.map((card, index) => {
            return (
              <ProjectCard
                key={index}
                cardNumber={index}
                name={card.name}
                description={card.description}
                category={card.category}
                linkTo={card.linkTo}
                stack={card.stack}
              ></ProjectCard>
            );
          })}
          <AnimatePresence>
            {activeCard !== -1 && (
              <Overlay>
                <ExpandedCard card={activeCard}></ExpandedCard>
              </Overlay>
            )}
          </AnimatePresence>
        </div>
      </AnimateSharedLayout>
    </Layout>
  );
};

export default Projects;
