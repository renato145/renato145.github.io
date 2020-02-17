import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const Tags = ({ data, location }) => {
  const title = data.site.siteMetadata.title;

  return (
    <Layout
      location={location}
      title={title}
      description='some description'
      headerConfig={{ title: 'header' }}
    >
      <div>have to read tags from url query and show here</div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
