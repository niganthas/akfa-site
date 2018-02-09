const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage, createRedirect } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    resolve(
      graphql(
        `
          {
            allContentfulAboutPage {
              edges {
                node {
                  slug
                  node_locale
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        _.each(result.data.allContentfulAboutPage.edges, edge => {
          const nodeLocal = edge.node.node_locale.substr(0, 2)
          const pagePath = `/${nodeLocal}/about/${edge.node.slug}/`
          const AboutTemplate = path.resolve(
            './src/templates/about-' + nodeLocal + '.js'
          )

          createPage({
            path: pagePath,
            component: AboutTemplate,
            layout: 'about',
            context: {
              slug: edge.node.slug,
            },
          })
          if (edge.node.slug == 'mission') {
            createRedirect({
              fromPath: `/${nodeLocal}/about/`,
              isPermanent: true,
              redirectInBrowser: true,
              toPath: pagePath,
            })
          }
        })
      })
    )
  })
}
