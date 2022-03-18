import * as React from "react";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Portfolio from "../components/portfolio";
import ContactForm from "../components/contactform";

const IndexPage = ({ location }) => {
  return (
    <Layout pageTitle="Desarrollador Web" location={location}>
      <Bio />
      <Portfolio />
      <ContactForm />
    </Layout>
  );
};

export default IndexPage;
