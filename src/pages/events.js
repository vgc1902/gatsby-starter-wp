import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

const EventsPage = ({ location }) => {
  return (
    <Layout location={location} title="events">
      <SEO title="Events" />
      <p>Events page</p>
    </Layout>
  )
}

export default EventsPage
