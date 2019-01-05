import React from 'react'
import '../assets/stylesheets/index.scss'

const CategoryPage = ({data}) => (
  <div className="main-wrapper">
    category page
  </div>
)

export const query = graphql`
  query CategoryQuery {
    allContentfulPaintings {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export default CategoryPage
