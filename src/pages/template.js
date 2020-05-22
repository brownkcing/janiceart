import React from 'react';
import { Link, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import Layout from "../components/layout";
import templateWork from '../templates/templateWork';


const TemplatePage = ({ data }) => (

  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: template }) => ( 
        <div key={templateWork.id} className="showcase__item">
          <figure className="card">
            <div className="card__image">
            <Link state={{modal:true, noScroll:true}} to={`/templateWork/${templateWork.slug}`} className="card__image">
              <Img fluid={templateWork.coverImage.fluid} />
            </Link>
            </div>
            </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
  
)

export default TemplatePage

export const query = graphql`
  query TemplateQuery {
    allDatoCmsTemplate(sort: { fields: [position], order: DESC }) {
      edges {
        node {
          id
          title
          slug
          templateImage {
            fluid(maxWidth: 400, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`