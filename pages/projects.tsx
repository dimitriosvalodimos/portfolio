import Layout from "@components/Layout";
import ProjectCard from "@components/ProjectCard";

const Projects = () => {
  return (
    <Layout currentPage="Projects">
      <h1 className="default-text font-semibold text-2xl">Projects</h1>
      <div className="flex-col flex-wrap sm:flex-row max-w-xs justify-evenly">
        <ProjectCard
          name="Todos"
          description="Simple Todo App with saving to localStorage and using Zustand for very easy access to the data."
          linkTo="/todos"
          stack={["Next.js", "TailwindCSS", "Typescript", "Zustand"]}
        ></ProjectCard>
        <ProjectCard
          name="Todos"
          description="Simple Todo App with saving to localStorage and using Zustand for very easy access to the data."
          linkTo="/todos"
          stack={["Next.js", "TailwindCSS", "Typescript", "Zustand"]}
        ></ProjectCard>
        <ProjectCard
          name="Todos"
          description="Simple Todo App with saving to localStorage and using Zustand for very easy access to the data."
          linkTo="/todos"
          stack={["Next.js", "TailwindCSS", "Typescript", "Zustand"]}
        ></ProjectCard>
      </div>
    </Layout>
  );
};

export default Projects;
