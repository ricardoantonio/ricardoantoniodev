import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({ data, location }) => {
  return (
    <Layout pageTitle="Blog" location={location} >
      <div className="blog-container">
      <h1>Blog</h1>
      {data.allMdx.nodes.map((post) => (
        <article key={post.id}>
          <Link to={`/blog/${post.slug}`}>
          <h2 style={{fontSize:'var(--font-size-4)',marginBottom:0}}>{post.frontmatter.title}</h2></Link>
          <small style={{color:'gray'}}>Publicado el {post.frontmatter.date}</
          small>
          <p>{post.excerpt}</p>
        </article>
      ))}
      </div>
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
        excerpt
      }
    }
  }
`;

export default BlogPage;
