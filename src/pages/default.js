import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const DefaultPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout
      location={location}
      title={siteTitle}
      description='some description'
    >
    </Layout>
  )
}

export default DefaultPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
