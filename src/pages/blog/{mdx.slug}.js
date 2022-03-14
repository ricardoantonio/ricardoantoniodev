import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

const PostPage = ({ data, location }) => {
  const heroImage = getImage(data.mdx.frontmatter.featured_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title} location={location}>
      <article className="blog-container">
      <header>
        <h1 style={{ marginBottom: 0}}>
          {data.mdx.frontmatter.title}
        </h1>
        <small style={{display:'block', marginBottom: '1.6rem'}}>Publicado el {data.mdx.frontmatter.date}</small>
        {heroImage && (
          <GatsbyImage
            image={heroImage}
            alt={data.mdx.frontmatter.featured_image_alt}
            style={{marginBottom: '3.2rem'}}
          />
        )}
      </header>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  );
};
console.log('holamundo')
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "dddd, D [de] MMMM [de] YYYY", locale: "es")
        featured_image_alt
        featured_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default PostPage;
