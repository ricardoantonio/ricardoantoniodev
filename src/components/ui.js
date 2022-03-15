import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  btn,
  btnIcon,
  tag,
  card,
  cardContent,
  cardTitle,
  cardTags,
  cardButtons,
} from "./ui.module.css";

const Button = ({ link, children }) => {
  return (
    <Link to={link} className={btn}>
      {children}
    </Link>
  );
};

const Tag = ({ children }) => {
  return <span className={tag}>{children}</span>;
};

const ProjectCard = ({
  screenshot,
  title,
  tags,
  description,
  codeLink,
  liveLink,
}) => {
  return (
    <div className={card}>
      <GatsbyImage alt="imagen" image={screenshot} />
      <div className={cardContent}>
        <h3 className={cardTitle}>{title}</h3>
        <div className={cardTags}>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </div>
        <p>{description}</p>
      </div>
        <div className={cardButtons}>
          {liveLink && (
            <Button link={liveLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={btnIcon}
                viewBox="0 0 512 512"
              >
                <title>Play</title>
                <path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z" />
              </svg>
              <span>Ir al proyecto</span>
            </Button>
          )}
          {codeLink && (
            <Button link={codeLink}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={btnIcon}
                viewBox="0 0 512 512"
              >
                <title>Code Slash</title>
                <path d="M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zM352 389a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389zM208 437a21 21 0 01-20.12-27l96-320a21 21 0 1140.23 12l-96 320A21 21 0 01208 437z" />
              </svg>
              <span>Ver código</span>
            </Button>
          )}
        </div>
    </div>
  );
};

export { Button, Tag, ProjectCard };
export default Button;
