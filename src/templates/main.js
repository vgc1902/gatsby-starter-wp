import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"

const Main = ({ data }) => {
  const posts = data.allWpPost.nodes
  if (!posts.length) {
    return (
      <Layout>
        <SEO title="All posts" />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Last posts" />

      <ol style={{ listStyle: `none` }}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ol>
      <Link to="/blog" style={{ color: `red` }}>
        {`Ver todas las noticias ->`}
      </Link>
    </Layout>
  )
}

export default Main

export const pageQuery = graphql`
  query($postsLimit: Int!) {
    allWpPost(sort: { fields: [date], order: DESC }, limit: $postsLimit) {
      nodes {
        excerpt
        uri
        date(formatString: "DD/MM/YYYY")
        title
        excerpt
      }
    }
  }
`
