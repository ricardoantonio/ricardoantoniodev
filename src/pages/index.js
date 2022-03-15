import * as React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Portfolio from "../components/portfolio";

const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="Desarrollador Web" location={location}>
      <Bio />
      <Portfolio />
    </Layout>
  );
};

export default IndexPage;
