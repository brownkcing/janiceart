import React from "react"
import Layout from "./layout"
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import "./layout.css";

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      modal ? (
        <React.Fragment>
          <Link to={closeTo}>
            <span className="close"></span>
          </Link>
          {children}
        </React.Fragment>
      ) : (
        <Layout { ...rest }>
          {children}
        </Layout>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout