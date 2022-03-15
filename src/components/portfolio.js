import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { ProjectCard } from "./ui";
import {projectsContainer} from "./portfolio.module.css"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allProjects {
        nodes {
          title
          tags
          description
          live_link
          code_link
          screenshot {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  console.log(data.allProjects);
  return (
    <section className="section">
      <h2>Mis proyectos</h2>
      <div className={projectsContainer}>
        {data.allProjects.nodes.map((project) => (
          <ProjectCard
            title={project.title}
            tags={project.tags}
            description={project.description}
            liveLink={project.live_link}
            codeLink={project.code_link}
            screenshot={getImage(project.screenshot)}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
