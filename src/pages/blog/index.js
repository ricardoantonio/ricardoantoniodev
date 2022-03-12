import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data, location }) => {
  return (
    <Layout pageTitle="Blog" location={location}>
      {data.allMdx.nodes.map((post) => (
        <article key={post.id}>
          <Link to={`/blog/${post.slug}`}>
          <h2>{post.frontmatter.title}</h2></Link>
          <p>{post.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "dddd, D [de] MMMM [de] YYYY", locale: "es")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
