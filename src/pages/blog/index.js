import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const BlogPage = ({ data, location }) => {
  return (
    <Layout pageTitle="Blog" location={location}>
      <div className="blog-container">
        <h1>Blog</h1>
        {data.allMdx.totalCount === 0 && <p>Aún no he escrito ningún artículo. 😅</p>}
        {data.allMdx.nodes.map((post, index) => (
          <article key={post.id}>
            <GatsbyImage
              alt={post.frontmatter.featured_image}
              image={getImage(post.frontmatter.featured_image)}
            />
            <div>
              <Link to={`/blog/${post.slug}`}>
                <h2
                  style={{
                    fontSize: "var(--font-size-4)",
                    marginBottom: 0,
                    marginTop: 0,
                  }}
                >
                  {index}
                  {post.frontmatter.title}
                </h2>
              </Link>
              <small style={{ color: "gray" }}>
                Publicado el {post.frontmatter.date}
              </small>
              <p>{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "dddd, D [de] MMMM [de] YYYY", locale: "es")
          featured_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
        excerpt
      }
      totalCount
    }
  }
`;

export default BlogPage;
