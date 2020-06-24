import React from 'react';
import { Link, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import Layout from "../components/layout";


const OtherInPage = ({ data }) => (

  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: other }) => ( 
        <div key={other.id} className="showcase__item">
          <figure className="card">
            <div className="card__image">
            <Link state={{modal:true, noScroll:true}} to={`/others/${other.slug}`} className="card__image">
              <Img fluid={other.coverImage.fluid} />
            </Link>
            </div>
            </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
  
)

export default OtherInPage

export const query = graphql`
  query OtherInQuery {
    allDatoCmsWork(sort: { fields: [position], order: DESC }) {
      edges {
        node {
          id
          title
          slug
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