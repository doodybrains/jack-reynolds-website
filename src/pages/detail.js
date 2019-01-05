import React from 'react'
import '../assets/stylesheets/index.scss'

const DetailPage = ({data}) => (
  <div className="main-wrapper">
    detail page
  </div>
)

export const query = graphql`
  query DetailQuery {
    allContentfulPaintings {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export default DetailPage
