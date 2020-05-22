import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import ConditionalLayout from "../components/ConditionalLayout"
import "../styles/index.sass";
import "../components/layout.css"



export default ({ data }) => (
     <ConditionalLayout>
       <article className="sheet">
         <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
            <Img fluid={data.datoCmsWork.coverImage.fluid} />
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
        fluid(maxWidth: 2000,  imgixParams: {maxW: 2000, fm: "png", auto: "compress" }){
          ...GatsbyDatoCmsFluid
        }
      }
      copyright
    }
  }
`
