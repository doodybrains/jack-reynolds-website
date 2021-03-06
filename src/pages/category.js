import React from 'react'
import '../assets/stylesheets/reset.scss'
import '../assets/stylesheets/base.scss'
import '../assets/stylesheets/index.scss'

const CategoryPage = ({data}) => (
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

      <div className="one-col-images">
        <img src="https://d2w9rnfcy7mm78.cloudfront.net/1498806/original_f13bd55db6e45da5be1925ac0c1f120a.jpg?1512960979" />
        <img src="https://d2w9rnfcy7mm78.cloudfront.net/1263870/original_bcc584e225601c30c17783c9b5e0ae1a.jpg?1505487470" />
        <img src="https://d2w9rnfcy7mm78.cloudfront.net/1498826/original_6970962c475b2c0805050077719190ff.jpg?1512961857" />
        <img src="https://www.reviler.org/wp-content/uploads/2011/04/tupac-dog.jpg" />
      </div>
    </div>

  </div>
)

export const query = graphql`
  query CategoryQuery {
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
  }
`;

export default CategoryPage
