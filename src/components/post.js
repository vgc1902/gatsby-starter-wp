import React from "react"
import { Link } from "gatsby"
import parse from "html-react-parser"

export const Post = ({ post }) => {
  return (
    <li key={post.uri}>
      <article
        className="post-list-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <div>
            <h2>
              <Link to={post.uri} itemProp="url">
                <span itemProp="headline">{parse(post.title)}</span>
              </Link>
            </h2>
            <small>{post.date}</small>
          </div>
        </header>
      </article>
    </li>
  )
}

export default Post
