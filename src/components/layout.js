import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isNotRootPath = location.pathname !== rootPath;

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const linkPages = [
    {
      name: "Inicio",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
  ];

  return (
    <div>
      <title>
        {data.site.siteMetadata.title} | {pageTitle}
      </title>

      <header>
        <Link to="/">
        <span>{data.site.siteMetadata.title}</span></Link>
        <nav>
          <ul>
            {linkPages.map((page) => (
              <li key={page.name}>
                <Link to={page.link} activeStyle={{ color: "red" }}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {isNotRootPath && <h1>{pageTitle}</h1>}
        {children}
      </main>
    </div>
  );
};

export default Layout;
