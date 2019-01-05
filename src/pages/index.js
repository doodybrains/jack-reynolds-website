import React from 'react'
import '../assets/stylesheets/index.scss'

const IndexPage = ({data}) => (
  <div className="main-wrapper">
    {data.allContentfulPaintings.edges.map((cat, i) => {
      return (
        <div key={i} className="category-link">
          {cat.node.title}
        </div>
      )
    })}
  </div>
)

export const query = graphql`
  query IndexQuery {
    allContentfulPaintings {
      edges {
        node {
          title
        }
      }
    }
  }
`;

export default IndexPage
