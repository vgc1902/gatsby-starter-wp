import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Post from "../components/post"
import SEO from "../components/seo"

const Main = ({ data }) => {
  const iconMap = ["🎉", "📕"]
  const posts = data.allWpPost.nodes
  const mediaItems = data.allFile.nodes
  const updateMediaItems = mediaItems.map((mediaItem, i) => ({
    ...mediaItem,
    icon: iconMap[i],
  }))
  console.log(updateMediaItems)
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
      <SEO title="Home" />

      <div>
        <div className="home-feed">
          <h3>
            Últimas noticias{" "}
            <span role="img" aria-label="Home latest news">
              🗞️
            </span>
          </h3>
          <ol style={{ listStyle: `none` }}>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </ol>
          <Link to="/blog" style={{ color: `red` }}>
            {`Ver todas las noticias ->`}
          </Link>
        </div>
        <aside>
          <h3>
            Archivos{" "}
            <span role="img" aria-label="Home latest news">
              📄
            </span>
          </h3>
          {updateMediaItems.map(({ publicURL, name, icon }) => {
            const splittedName = name.split("_")
            return (
              <a href={publicURL} download>
                <span>{icon}</span>
                <span>{`${splittedName[1]} ${splittedName[2]}`}</span>
              </a>
            )
          })}
        </aside>
      </div>
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
    allFile(filter: { extension: { eq: "pdf" } }, limit: 2) {
      nodes {
        name
        publicURL
      }
    }
  }
`
