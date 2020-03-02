import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import ConditionalLayout from "../components/ConditionalLayout"
import "../styles/index.sass";
import "../components/layout.css"



export default ({ data }) => (
    // <ConditionalLayout>
          <div>
            <Img fluid={data.datoCmsWork.coverImage.fluid} />
          </div>
    // </ConditionalLayout>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      coverImage {
        url
        fluid(maxWidth: 800,  imgixParams: { fm: "jpg", auto: "compress" }){
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
