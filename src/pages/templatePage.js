import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"



const TemplatePage = ({ data: { template } }) => (
  <Layout>
    <article className="sheet">
    <Img style={{borderRadius: "20%"}} fluid={template.photo.fluid} />
    </article>
  </Layout>
)

export default TemplatePage

export const query = graphql`
  query TemplatepQuery {
    template: datoCmsTemplatePage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      photo {
        fluid(maxWidth: 1000,  imgixParams: {maxW: 1000, fm: "png", auto: "compress" }){
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`