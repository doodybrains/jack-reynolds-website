import React from 'react'
import '../assets/stylesheets/reset.scss'
import '../assets/stylesheets/base.scss'
import '../assets/stylesheets/index.scss'

const IndexPage = ({data}) => (
  <div className="main-wrapper">
    <div className="header">
      <h1>Jack Reynolds</h1>
      <p>signature</p>
    </div>
    <div className="container">
      <div className="nav">
        {data.allContentfulMainNavigation.edges.map((cat, i) => {
          return (
            cat.node.allCategories.map((post, i)=> {
              return (
                <p key={i}>
                  {post.name}
                </p>
              )
            })
          )
        })}
      </div>

      <div className="two-col-images">
        {data.allContentfulThing.edges.map((cat, i) => {
          return (
            <img key={i} src={cat.node.mainImage.file.url} alt="" />
          )
        })}
      </div>
    </div>

  </div>
)

export const query = graphql`
  query IndexQuery {
    allContentfulMainNavigation {
      edges {
        node {
          allCategories {
            ... on ContentfulCategory {
              name
            }
          }
        }
      }
    }
    allContentfulThing {
      edges {
        node {
          category {
            ... on ContentfulCategory {
              name
            }
          }
          mainImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

export default IndexPage
