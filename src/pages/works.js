import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

import GlobalStyle from "../globalStyles/globalStyles"
import Projects from "../components/projects/projects.component"

const ProjectsPage = ({ data }) => {
  return (
    <>
      <GlobalStyle theme="purple" />
      <Seo title="Project Page" />
      <Projects data={data} />
    </>
  )
}

export default ProjectsPage

export const query = graphql`
  query MyQuery {
    allStrapiProjects {
      nodes {
        strapiId
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
