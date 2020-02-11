import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const DefaultPage = ({ data, location }) => {
  const title = 'About';
  const { author, mail } = data.site.siteMetadata;

  return (
    <Layout
      location={location}
      title='About me'
      // description={title}
      headerConfig={{ title }}
    >
      <p>
        Hi! this is {author}. I'm a second year PhD student at the University of Adelaide, my work focuses on applying
        machine learning to medical images. I am currently working on weakly supervised localization.
      </p>
      <p>
        Things I'm interested, in no particular order:
        machine learning, data visualization, optimization, simulation, open source...
      </p>
      <p>
        I'm always up to apply my knowledge on impactful and social projects,
        if you are interested in doing a collaboration, send me a mail to: <a href={`mailto:${mail}`}>{mail}</a>.
      </p>

      {/* <h4>News</h4>
      <ul>
        <li>timeline things</li>
      </ul>

      <h4>Research</h4>
      <ul>
        <li>papers</li>
      </ul> */}

        {/* Data scientist and machine learning researcher at the Artificial Intelligence Group at PUCP [(iapucp)]
        (http://ia.inf.pucp.edu.pe/). I studied a MS in Computer Science at the Pontifical Catholic University of Perú 
        (PUCP).

        Things I like, in no particular order:
        - Teaching.
        - Movies (Kieślowski, Tarkovsky, Jodorowsky, ...sky).
        - Cooking.
        - Books, a little bit of everything. One particular favorite: The Museum of Eterna's Novel.
        - Outdoors, camping. */}
    </Layout>
  )
}

export default DefaultPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        author
        mail
      }
    }
  }
`
