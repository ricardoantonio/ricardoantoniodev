import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import { mdx } from "@mdx-js/react";

const PostPage = ({ data, location }) => {
  return <Layout pageTitle={data.mdx.frontmatter.title} location={location}>
<MDXRenderer>{data.mdx.body}</MDXRenderer>
  </Layout>;
};

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date
    }
    body
  }
}
`

export default PostPage