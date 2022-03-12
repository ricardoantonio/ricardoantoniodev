import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isNotRootPath = location.pathname !== rootPath;

  return <div>{isNotRootPath && <h1>{pageTitle}</h1>}</div>;
};

export default Layout;
