import React, { Component } from "react";
import '../assets/stylesheets/reset.scss'
import '../assets/stylesheets/base.scss'
import '../assets/stylesheets/index.scss'

class ThingTemplate extends Component {
  render() {
    const thing = this.props.data.contentfulThing;

    const categories = this.props.data.allContentfulMainNavigation.edges[0];
    console.log(categories);
    return (
      <div className="main-wrapper">





          <div className="header">
          <a href="/"><h1>Jack Reynolds</h1></a>
                    <p>signature</p>
                  </div>
                  <div className="container">
          <div className="nav">
            {categories.node.allCategories.map((thing, i) => {
              return (
                <a key={i} href={`/${thing.slug}`}>
                  {thing.name}
                </a>
              )
            })}
          </div>

          <div className="images-with-specs">
            <div className='body-text' dangerouslySetInnerHTML={{__html: thing.imagesAndSpecs.childMarkdownRemark.html}} />
        </div>
        </div>

      </div>

    );
  }
}

export default ThingTemplate;

export const pageQuery = graphql`
  query thing($slug: String!) {
    contentfulThing(slug: { eq: $slug }) {
      title
      mainImage {
        file {
          url
        }
      }
      imagesAndSpecs {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulMainNavigation {
      edges {
        node {
          allCategories {
            ... on ContentfulCategory {
              name
              slug
            }
          }
        }
      }
    }
  }
`
