import useProjects from "../hooks/useProjects";
import PortfolioItem from "../components/PortfolioItem";
import ContactMe from "../components/ContactMe";

const Portfolio = () => {
  const [projects, isLoading] = useProjects();

  return (
    <main>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {projects.map((project) => (
            <PortfolioItem key={project.id} name={project.name} description={project.description} images={project.images} />
          ))}
          <ContactMe />
        </>
      )}
    </main>
  );
};

export default Portfolio;
