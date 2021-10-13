import Layout from "@components/Layout";
import ProjectCard from "@components/ProjectCard";

const Projects = () => {
  return (
    <Layout currentPage="Projects">
      <h1 className="default-text font-semibold text-2xl text-center mt-12">
        My Projects
      </h1>
      <div className="mt-8 sm:mt-16 flex flex-wrap justify-center gap-2">
        <ProjectCard
          name="Todos"
          description="Simple Todo App with saving to localStorage and using Zustand for very easy access to the data."
          category="Web"
          linkTo="/todos"
          stack={["Next.js", "TailwindCSS", "Typescript", "Zustand"]}
        ></ProjectCard>
        <ProjectCard
          name="Todos"
          description="Simple Todo App with saving to localStorage and using Zustand for very easy access to the data."
          category="Web"
          linkTo="/todos"
          stack={["Next.js", "TailwindCSS", "Typescript", "Zustand"]}
        ></ProjectCard>
        <ProjectCard
          name="Todos"
          description="Simple Todo App with saving to localStorage and using Zustand for very easy access to the data."
          category="Web"
          linkTo="/todos"
          stack={["Next.js", "TailwindCSS", "Typescript", "Zustand"]}
        ></ProjectCard>
      </div>
    </Layout>
  );
};

export default Projects;
