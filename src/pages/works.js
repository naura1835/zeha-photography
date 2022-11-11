import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

import GlobalStyle from "../globalStyles/globalStyles"
import Projects from "../components/projects/projects.component"
import Layout from "../components/layout"

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <GlobalStyle theme="purple" />
      <Seo title="Project Page" />
      <Projects data={data} />
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  query MyQuery {
    allStrapiProject {
      nodes {
        strapi_id
        project_title
        slug
        category
        project_date
        id
        image {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
            id
            publicURL
          }
        }
      }
    }
  }
`
