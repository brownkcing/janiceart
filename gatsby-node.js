const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const workTemplate = path.resolve(`./src/templates/work.js`)
const otherTemplate = path.resolve(`./src/templates/other.js`)



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const illustrate = new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsWork.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: workTemplate,
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })

  const otherWork = new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsOther {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        Promise.reject(result.errors);
      }
      result.data.allDatoCmsOther.edges.map(({ node: other }) => {
        createPage({
          path: `others/${other.slug}`,
          component: otherTemplate,
          context: {
            slug: other.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([ otherWork, illustrate ]);
}

