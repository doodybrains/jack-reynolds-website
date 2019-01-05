const path = require("path");

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const categoryTemplate = path.resolve("src/templates/category.js");
    const thingTemplate = path.resolve("src/templates/thing.js");

    resolve(
      graphql(`
        {
          allContentfulCategory {
            edges {
              node {
                id
                slug
                things {
                  ... on ContentfulThing {
                    id
                    slug
                  }
                }
              }
            }
          }
        }
      `)
        .then(result => {
          if (result.errors) {
            reject(result.errors);
          }
          result.data.allContentfulCategory.edges.forEach(edge => {
            createPage({
              path: `/${edge.node.slug}`,
              component: categoryTemplate,
              context: {
                slug: edge.node.slug
              }
            });
            {edge.node.things.map((thing, i) => {
              return (
                createPage({
                  path: `/${edge.node.slug}/${thing.slug}`,
                  component: thingTemplate,
                  context: {
                    slug: thing.slug
                  }
                })
              );
            })}
            return;
          });
        })
    );
  });
};
