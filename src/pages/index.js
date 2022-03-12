import * as React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";

const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="Desarrollador Web" location={location}>
      <Bio />
    </Layout>
  );
};

export default IndexPage;
