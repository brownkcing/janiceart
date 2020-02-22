import React from 'react';
import { Link, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import Layout from "../components/layout";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';

const IndexPage = ({ data }) => (

  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => ( 
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <div className="card__image">
            <Img fluid={work.coverImage.fluid} />
            </div>
            </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
  
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 400, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
