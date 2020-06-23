import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"



const Template = ({ data: { template } }) => (
  <Layout>
     <article className="sheet">
     <p className="sheet__lead">{template.test}</p>
    </article>
  </Layout>
)

export default Template

export const query = graphql`
  query TemplateQuery {
    template: datoCmsTemplatePage {
      test
    }
  }
`