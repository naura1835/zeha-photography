import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import ProjectDetails from "../../components/projectDetails/projectDetails.component"
import GlobalStyle from "../../globalStyles/globalStyles"

const ProjectDetail = ({ data }) => {
  const [whiteBg, isWhiteBg] = useState(false)
  useEffect(() => {
    isWhiteBg(true)
  }, [])
  return (
    <>
      <GlobalStyle theme="white" />
      <ProjectDetails data={data} whiteBg={whiteBg} />
    </>
  )
}

export default ProjectDetail

export const query = graphql`
  query ($id: String!) {
    strapiProjects(id: { eq: $id }) {
      id
      strapiId
      project_title
      slug
      category
      project_date
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
`
