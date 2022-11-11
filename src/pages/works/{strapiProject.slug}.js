import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import ProjectDetails from "../../components/projectDetails/projectDetails.component"
import GlobalStyle from "../../globalStyles/globalStyles"
import Layout from "../../components/layout"

const ProjectDetail = ({ data }) => {
  const [whiteBg, isWhiteBg] = useState(false)
  useEffect(() => {
    isWhiteBg(true)
  }, [])
  return (
    <Layout>
      <GlobalStyle theme="white" />
      <ProjectDetails data={data} whiteBg={whiteBg} />
    </Layout>
  )
}

export default ProjectDetail

export const query = graphql`
  query ($id: String!) {
    strapiProject(id: { eq: $id }) {
      id
      strapi_id
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
