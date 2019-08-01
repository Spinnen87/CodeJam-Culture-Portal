const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        const DirectorTemplate = path.resolve('src/templates/directorTemplate.js')
        resolve(
            graphql(`
        {
            allContentfulDirector {
                edges {
                  node {
                    path
                  }
                }
              }
        }
      `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulDirector.edges.forEach(edge => {
                    createPage({
                        path: edge.node.path,
                        component: DirectorTemplate,
                        context: { pathToPage: edge.node.path }
                    })
                })
                return;
            })
        )
    })
}
