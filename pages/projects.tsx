import Layout from "@components/Layout";
import ProjectCard from "@components/ProjectCard";
import { AnimateSharedLayout } from "framer-motion";
import { useCards } from "@utils/useProjectCards";

const Projects = () => {
  const cardData = useCards((state) => state.cardData);
  return (
    <Layout currentPage="Projects">
      <h1 className="default-text font-semibold text-4xl text-center mt-12">
        My Projects
      </h1>
      <AnimateSharedLayout type="crossfade">
        <div className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-2">
          {cardData.map((_, index) => {
            return <ProjectCard key={index} cardNumber={index}></ProjectCard>;
          })}
        </div>
      </AnimateSharedLayout>
    </Layout>
  );
};

export default Projects;
