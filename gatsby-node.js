const {createFilePath} = require(`gatsby-source-filesystem`)
const path = require(`path`);

exports.onCreateNode = ({node, getNode, actions}) => {
    const {createNodeField} = actions;
    if(node.internal.type === `MarkdownRemark`){
        const slug = createFilePath({node, getNode});

        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
}

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    return graphql(`
      query{
        allMarkdownRemark(sort: {fields : [frontmatter___date], order: ASC}) {
          edges {
            node {
                id
                frontmatter{
                    description
                    title
                    date
                }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) =>{
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/blog-post.js`),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}