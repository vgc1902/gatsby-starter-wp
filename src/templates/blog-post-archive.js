import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
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
      <SEO title="All posts" />
      <h3>
        Noticias{" "}
        <span role="img" aria-label="Home latest news">
          🗞️
        </span>
      </h3>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ol>

      {previousPagePath && (
        <>
          <Link to={previousPagePath}>Previous page</Link>
          <br />
        </>
      )}
      {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
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
