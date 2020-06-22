import React from 'react';
import { Link, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import Layout from "../components/layout";


const Template= ({ data }) => (

  <Layout>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => ( 
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <div className="card__image">
            <Link state={{modal:true, noScroll:true}} to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            </div>
            </figure>
        </div>
      ))}
    </Masonry>
  </Layout>
  
)

export default Template

export const query = graphql`
  query IndexQuery {
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