import React from "react"
import Layout from "./layout"
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import "./layout.css";

const ConditionalLayout = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal}) => (
      modal ? (
        <React.Fragment>
          {children}
        </React.Fragment>
      ) : (
        <Layout { ...rest } >
          {children}
        </Layout>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
