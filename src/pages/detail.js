import React from 'react'
import '../assets/stylesheets/reset.scss'
import '../assets/stylesheets/base.scss'
import '../assets/stylesheets/index.scss'

const DetailPage = ({data}) => (
  <div className="main-wrapper">
    <div className="header">
      <h1>Jack Reynolds</h1>
      <p>signature</p>
    </div>
    <div className="container">
      <div className="nav">
        <p className="active">Canvas</p>
        <p>Cardboard</p>
        <p>Felt</p>
        <p>Cotton</p>
      </div>

      <div className="images-with-specs">
        <img src="https://d2w9rnfcy7mm78.cloudfront.net/1498806/original_f13bd55db6e45da5be1925ac0c1f120a.jpg?1512960979" />
        <p>Name of painting, measurements</p>
      </div>
    </div>

  </div>
)

export const query = graphql`
  query DetailQuery {
    allContentfulCategory {
      edges {
        node {
          name
        }
      }
    }
  }
`;

export default DetailPage

