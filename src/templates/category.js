import React, { Component } from "react";
import '../assets/stylesheets/reset.scss'
import '../assets/stylesheets/base.scss'
import '../assets/stylesheets/index.scss'

class CategoryTemplate extends Component {
  render() {
    const category = this.props.data.contentfulCategory;

    const categories = this.props.data.allContentfulMainNavigation.edges[0];
    console.log(category.name);
    return (
      <div className="main-wrapper">





          <div className="header">
                    <a href="/"><h1>Jack Reynolds</h1></a>
                    <p>signature</p>
                  </div>
                  <div className="container">
          <div className="nav">
            {categories.node.allCategories.map((thing, i) => {
              const activeClass = thing.name === category.name ? 'active' : '';
              return (
                <a key={i} className={activeClass} href={`/${thing.slug}`}>
                  {thing.name}
                </a>
              )
            })}
          </div>

          <div className="one-col-images">
          {category.things.map((thing, i) => {
             return (
               <a className="thing-item" href={`/${category.slug}/${thing.slug}`} key={i}>
                 <img key={i} src={thing.mainImage.file.url} alt="" />
               </a>
             );
           })}
          </div>
        </div>

      </div>

    );
  }
}

export default CategoryTemplate;

export const pageQuery = graphql`
  query categoryQuery($slug: String!) {
    contentfulCategory(slug: { eq: $slug }) {
      name
      slug
      things {
        ... on ContentfulThing {
          slug
          title
          mainImage {
            file {
              url
            }
          }
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
