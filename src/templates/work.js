import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import ConditionalLayout from "../components/ConditionalLayout"
import "../styles/index.sass";



export default ({ data }) => (
    <ConditionalLayout>
      <article className="sheet">
          <div className="sheet__gallery" >
            <Img fluid={data.datoCmsWork.coverImage.fluid} />
          </div>
      </article>
    </ConditionalLayout>
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
        fluid(maxWidth: 800,  imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
