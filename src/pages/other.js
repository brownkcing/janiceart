import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"



const Other = ({ data: { other } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={other.seoMetaTags} />
      <div className="sheet__inner">
        {/* <h1 className="sheet__title">{about.title}</h1> */}
        <p className="sheet__lead">{other.subtitle}</p>
        <div className="sheet__gallery">
         <Img style={{borderRadius: "20%"}} fluid={other.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: other.bioNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)

export default Other

export const query = graphql`
  query OtherQuery {
    other: datoCmsOtherPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 1000,  imgixParams: {maxW: 1000, fm: "png", auto: "compress" }){
          ...GatsbyDatoCmsFluid
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`