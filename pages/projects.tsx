import Layout from "@components/Layout";
import ProjectCard from "@components/ProjectCard";
import link from "next/link";

const Projects = () => {
  return (
    <Layout currentPage="Projects">
      <h1>Projects</h1>
      <ProjectCard></ProjectCard>
    </Layout>
  );
};

export default Projects;
