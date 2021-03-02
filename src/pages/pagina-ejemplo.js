import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ExamplePage = ({ location, data: { page } }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <h1>{page.title}</h1>
      <div>{parse(page.content)}</div>
    </Layout>
  )
}

export default ExamplePage

export const pageQuery = graphql`
  query {
    page: wpPage(id: { eq: "cG9zdDoy" }) {
      content
      title
    }
  }
`
